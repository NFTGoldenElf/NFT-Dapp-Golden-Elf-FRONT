import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Placeholder from "/ProfilePhotoPlaceholder.jpg"

const Profile: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const wallet = useSelector((state: RootState) => state.wallet);
    const user = useSelector((state: RootState) => state.user);

    return (
        <>
            <img src={user.profilePhoto} width={"180px"}/>
            <div>
                Nombre de usuario: {user.username}
            </div>
            <div>
                Dirección de la cuenta: {wallet.accounts[0]}
            </div>
            <div>
                Balance de la cuenta: {wallet.balance}
            </div>
            <div>
                Cadena: {wallet.chainId}
            </div>
        </>
    )
}

export default Profile;