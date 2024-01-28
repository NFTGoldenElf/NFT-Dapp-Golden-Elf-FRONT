import { FC } from "react";
import styles from './UserCard.module.css'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
    username: string;
    profilePhoto: string;
    accountAddress: string;
}

const UserCard: FC<Props> = ({ username, profilePhoto, accountAddress }) => {
    const navigate = useNavigate();

    const { accounts } = useSelector((state: RootState) => state.wallet)

    const handleNavigate = () => {
        if (accountAddress === accounts[0]) {
            navigate('/perfil')
        } else {
            navigate(`/usuario/${accountAddress}`)
        }
    }

    return (
        <article onClick={handleNavigate} className={styles["user-card"]}>
            <img src={profilePhoto} alt={username} className={styles["user-img"]} />
        </article>
    )
}

export default UserCard