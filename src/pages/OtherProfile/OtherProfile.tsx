import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { otherUsersState } from "../../redux/slices/otherUsersSlice";
import { useNavigate } from "react-router-dom";
import styles from './OtherProfile.module.css'
import {
    URITokensAndIds,
    formatURITokensAndIds,
    formatURITokensAndIdsAndPrice,
    getNFTsForSale,
    formattedNFTs,
    formattedNFTsSale,
    buyNFT,
    formatAmountInWei
} from "../../utils/utils";

const OtherProfile: FC = () => {
    const { address } = useParams();
    const navigate = useNavigate();

    const otherUsers = useSelector((state: RootState) => state.otherUsers);
    const { accounts } = useSelector((state: RootState) => state.wallet);

    const [currentUser, setCurrentUser] = useState<otherUsersState | null>(null)
    const [NFTs, setNFTs] = useState<formattedNFTs[] | never[]>([]);
    const [NFTsSale, setNFTsSale] = useState<formattedNFTsSale[] | never[]>([])
    const [isTransacting, setIsTransacting] = useState<boolean>(false);

    const handleTransact = (tokenId: number, price: number) => {
        return async () => {
            try {
                const value = formatAmountInWei(price).toString();
                setIsTransacting(true)
                await buyNFT(tokenId).send({ from: accounts[0], value: value })
                setIsTransacting(false)
            }
            catch (error) {
                console.error(error)
                setIsTransacting(false)
            }
        }
    }

    useEffect(() => {
        if (address === accounts[0]) navigate('/perfil');
        const index = otherUsers.findIndex((user) => user.accountAddress === address);
        setCurrentUser(otherUsers[index])

        const getNFTs = async () => {
            try {
                const firstResponse = await URITokensAndIds(address).call()
                const formatNFTs = await formatURITokensAndIds(firstResponse);
                setNFTs(formatNFTs);
            }
            catch (error: any) {
                console.error(error);
            }

        }
        getNFTs()

        const getNFTsSale = async () => {
            const firstResponse = await getNFTsForSale(address).call();
            const formatNFTs = await formatURITokensAndIdsAndPrice(firstResponse);
            setNFTsSale(formatNFTs);
        }
        getNFTsSale();
    }, [])

    return (
        <>
            <section className={styles["user-section"]}>
                {currentUser &&
                    <>
                        <img className={styles["user-image"]} src={currentUser.profilePhoto} alt={currentUser.username} />
                        <h1 className={styles["user-name"]}>Nombre: {currentUser.username}</h1>
                        <label className={styles["user-address"]}>Dirección: {currentUser.accountAddress}</label>
                    </>
                }
            </section>

            <section className={styles["nft-section"]}>
                <h1>NFTs de este usuario:</h1>
                {NFTs.length > 0 &&
                    NFTs.map(element => {
                        return (
                            <article className={styles["nft-card"]}>
                                <img src={element.image} alt={element.name} />
                                <h1>Nombre: {element.name}</h1>
                                <p>Descripción: {element.description}</p>
                            </article>
                        )
                    })
                }
            </section>

            <section className={styles["nft-sale-section"]}>
                <h1 className={styles["title-nft-section"]}>NFT en venta de este usuario</h1>
                {NFTsSale.length > 0 &&
                    NFTsSale.map(element => {
                        return (
                            <article className={styles["nft-sale"]} key={element.tokenId}>
                                <img src={element.image} alt={element.name} key={element.tokenId} />
                                <h1>Nombre: {element.name}</h1>
                                <p>Descripción: {element.description}</p>
                                <label>Precio: {element.price} ethers</label>
                                <div>
                                    <button
                                        onClick={handleTransact(element.tokenId, element.price)}
                                        disabled={isTransacting}
                                    >
                                        {isTransacting ? "Procesando compra..." : "¡Compralo!"}
                                    </button>
                                </div>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default OtherProfile