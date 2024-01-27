import { FC } from "react";
import Modal from "../../containers/modals/ModalForm/ModalForm.modal";
import { useState } from "react";
import MintNFTForm from "../../containers/forms/MintNFT/MintNFT.form";

const MintNFT: FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <>
            <button
                className="text-gray-100 bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pencil"
                onClick={() => setShowModal(true)}
            >
                Crear NFT
            </button>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} Component={MintNFTForm} />
        </>
    )
}

export default MintNFT