import { FC } from 'react';
import styles from './GoldenElfImage.module.css'

interface GoldenElfImageProps {
    img: any;
    key: number;
}

const GoldenElfImage: FC<GoldenElfImageProps> = ({ img, key }) => {
    return (
        <img className={styles["elf-image"]} src={img} alt="Elfo dorado" key={key} />
    )
}

export default GoldenElfImage