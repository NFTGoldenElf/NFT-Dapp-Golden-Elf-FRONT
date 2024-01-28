import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import EditUserForm from "../../containers/forms/EditUser/EditUser.form";
import Modal from "../../containers/modals/ModalForm/ModalForm.modal";
import MintNFTForm from "../../containers/forms/MintNFT/MintNFT.form";
import styles from './Profile.module.css';
import { URITokensAndIds, formatURITokensAndIds, formattedNFTs } from "../../utils/utils";
import NFTCardList from "../../containers/nfts/NFTCardList/CardList";

const Profile: FC = () => {
  const wallet = useSelector((state: RootState) => state.wallet);
  const user = useSelector((state: RootState) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [showModalMint, setShowModalMint] = useState(false);
  const [error, setError] = useState<string>("");
  const [NFTs, setNFTs] = useState<formattedNFTs[] | never[]>([]);

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
        <button className={styles["button-mint-nft"]} onClick={() => setShowModalMint(true)}>
          Mintear NFT
        </button>
        <Modal isVisible={showModalMint} onClose={() => setShowModalMint(false)} Component={MintNFTForm} />
        
        {error.length > 0 && <label>{error}</label>}
        <NFTCardList array={NFTs}/>
      </section>
    </>

  );
};

export default Profile;