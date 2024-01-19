import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import Placeholder from "/ProfilePhotoPlaceholder.jpg"

const Profile: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const wallet = useSelector((state: RootState) => state.wallet);

    return (
        <>
            <img src={Placeholder} width={"180px"}/>
            <div>
                Nombre de usuario:
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