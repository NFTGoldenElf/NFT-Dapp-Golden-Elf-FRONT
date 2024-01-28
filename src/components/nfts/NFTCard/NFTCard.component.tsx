import { FC } from "react";
import styles from './NFTCard.module.css'

interface Props {
    name: string;
    description: string;
    image: string;
    tokenId: number;
    external_url: string;
}

const NFTCard: FC<Props> = ({ name, description, image, tokenId, external_url }) => {
    return (
        <article className={styles["nft-article"]}>
            <img src={image} alt={name} className={styles["nft-image"]}/>
            <h1 className={styles["nft-name"]}>{name}</h1>
            <h2 className={styles["nft-id"]}>Id del token: {tokenId}</h2>
            <p className={styles["nft-description"]}>{description}</p>
            <label className={styles["nft-external-url"]}>URL externa: {external_url}</label>
        </article>
    )
}

export default NFTCard