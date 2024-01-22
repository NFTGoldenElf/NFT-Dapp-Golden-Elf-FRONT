import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ModalEditUser from "../../components/Modals/EditUser";

const Profile: FC = () => {
  const wallet = useSelector((state: RootState) => state.wallet);
  const user = useSelector((state: RootState) => state.user);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
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
        onClick={() => setShowPasswordModal(true)}
      >
        Editar Usuario
      </button>
  
      <ModalEditUser isVisible={showPasswordModal} onClose={() => setShowPasswordModal(false)} userId={user._id} />
    </div>
  );
};

export default Profile;