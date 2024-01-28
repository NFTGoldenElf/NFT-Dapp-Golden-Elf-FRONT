import { FC } from "react";
import NFTCard from "../../../components/nfts/NFTCard/NFTCard.component";
import styles from './CardList.module.css'

interface Props {
    name: string;
    description: string;
    image: string;
    tokenId: number;
    external_url: string;
}

const NFTCardList: FC<any> = ({ array }) => {
    return (
        <div className={styles["nft-card-list"]}>
            {array.map((element: Props) => {
                return (
                    <NFTCard
                        name={element.name}
                        description={element.description}
                        image={element.image}
                        tokenId={element.tokenId}
                        external_url={element.external_url}
                        key={element.tokenId}
                    />
                )
            })}
        </div>
    )
}

export default NFTCardList