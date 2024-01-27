import { FC } from 'react';
import styles from './InfoImage.module.css'

interface Props {
    img: any;
    key: number;
}

const InfoImage: FC<Props> = ({ img, key }) => {
    return (
        <img className={styles["info-image"]} src={img} alt="Elfo dorado" key={key} />
    )
}

export default InfoImage