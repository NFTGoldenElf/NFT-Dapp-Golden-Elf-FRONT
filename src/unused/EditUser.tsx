import { FC, MouseEvent } from "react";
import EditUserForm from "../containers/forms/EditUser/EditUser.form";

interface ModalPasswordProps {
  isVisible: boolean;
  onClose: () => void;
  userId: string;
}

const ModalEditUser: FC<ModalPasswordProps> = ({ isVisible, onClose, userId }) => {
  if (!isVisible) return null;

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.id === "wrapper") {
      onClose();
    }
  };
  const handleSave = () => {
    onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10 "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col p-4 rounded">
        <button
          onClick={() => onClose()}
          className=" text-lg text-gray-100 px-2 rounded bg-gray-600 self-start transition duration-300 hover:text-red-800 hover:shadow-md"
        >
          X
        </button>
        <div className="">
          <EditUserForm userId={userId} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default ModalEditUser;