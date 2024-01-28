import { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import EditUserForm from "../../containers/forms/EditUser/EditUser.form";
import Modal from "../../containers/modals/ModalForm/ModalForm.modal";
import MintNFTForm from "../../containers/forms/MintNFT/MintNFT.form";
import styles from './Profile.module.css';
import { URITokensAndIds, formatURITokensAndIds, formattedNFTs, getNFTsForSale, formatURITokensAndIdsAndPrice, formattedNFTsSale } from "../../utils/utils";
import NFTCardList from "../../containers/nfts/NFTCardList/CardList";
import APICall from "../../backend/axiosInstance";
import { USER_ROUTES } from "../../backend/routes";
import { loadUsers, resetUsers } from "../../redux/slices/otherUsersSlice";
import UserCard from "../../components/nfts/UserCard/UserCard";

const Profile: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const wallet = useSelector((state: RootState) => state.wallet);
  const user = useSelector((state: RootState) => state.user);
  const otherUsers = useSelector((state: RootState) => state.otherUsers)


  const [showModal, setShowModal] = useState(false);
  const [showModalMint, setShowModalMint] = useState(false);
  const [error, setError] = useState<string>("");
  const [NFTs, setNFTs] = useState<formattedNFTs[] | never[]>([]);
  const [NFTsSale, setNFTsSale] = useState<formattedNFTsSale[] | never[]>([]);

  useEffect(() => {
    const getNFTs = async () => {
      try {
        const firstResponse = await URITokensAndIds(wallet.accounts[0]).call()
        const formatNFTs = await formatURITokensAndIds(firstResponse);
        setNFTs(formatNFTs);
        setError("");
      }
      catch (error: any) {
        setError(error.message)
      }

    }
    getNFTs()

    const getNFTsSale = async () => {
      const firstResponse = await getNFTsForSale(wallet.accounts[0]).call();
      const formatNFTs = await formatURITokensAndIdsAndPrice(firstResponse);
      setNFTsSale(formatNFTs);
    }
    getNFTsSale();

    const getAllUsersExceptMe = async () => {
      try {
        const response = await APICall.get(USER_ROUTES.getAllUsersExceptMe(wallet.accounts[0]));
        const allUsersExceptMe = response.data;
        dispatch(loadUsers(allUsersExceptMe));
      }
      catch (error) {
        dispatch(resetUsers());
      }
    }
    getAllUsersExceptMe();

  }, [wallet.accounts[0]])

  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
        <div className="mb-8">
          <div className="rounded-full overflow-hidden w-48 h-48 mb-2">
            <img
              src={user.profilePhoto}
              alt="User Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center">
          <div className="font-bold text-3xl mb-4">{user.username}</div>
          <div className="flex items-center text-lg mb-4">
            <div className="font-bold mr-2">Dirección de la cuenta:</div>
            <div>{wallet.accounts[0]}</div>
          </div>
          <div className="flex items-center text-lg mb-4">
            <div className="font-bold mr-2">Balance de la cuenta:</div>
            <div>{wallet.balance}</div>
          </div>
          <div className="flex items-center text-lg mb-4">
            <div className="font-bold mr-2">Cadena:</div>
            <div>{wallet.chainId}</div>
          </div>
        </div>

        <button
          className="text-gray-100 bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pencil"
          onClick={() => setShowModal(true)}
        >
          Editar Usuario
        </button>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} Component={EditUserForm} />
      </section>

      <section className={styles["nft-section"]}>
        <h1 className={styles["title-nft-section"]}>Tus NFT</h1>
        <button className={styles["button-mint-nft"]} onClick={() => setShowModalMint(true)}>
          Mintear NFT
        </button>
        <Modal isVisible={showModalMint} onClose={() => setShowModalMint(false)} Component={MintNFTForm} />

        {error.length > 0 && <label>{error}</label>}
        <NFTCardList array={NFTs} />
      </section>

      <section className={styles["nft-section"]}>
        <h1 className={styles["title-nft-section"]}>Tus NFT en venta</h1>
        {NFTsSale.length > 0 &&
        NFTsSale.map(element=>{
          return (
            <article className={styles["nft-sale"]} key={element.tokenId}>
              <img src={element.image} alt={element.name} key={element.tokenId}/>
              <h1>Nombre: {element.name}</h1>
              <p>Descripción: {element.description}</p>
              <label>Precio: {element.price} ethers</label>
            </article>
          )
        })
        }
      </section>

      <section className={styles["users-section"]}>
        {otherUsers.length > 0 && otherUsers.map((element) => {
          return (
            <UserCard
              username={element.username}
              profilePhoto={element.profilePhoto}
              accountAddress={element.accountAddress}
              key={element.username}
            />
          )
        })}
      </section>
    </>

  );
};

export default Profile;