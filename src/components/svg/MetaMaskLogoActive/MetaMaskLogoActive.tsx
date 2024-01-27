import { FC } from "react";
import styles from './MetaMaskLogoActive.module.css'

interface Props {
    style: string;
    onClick: () => void;
}

const MetaMaskLogoActive: FC<Props> = ({ style, onClick }) => {
    return (
        <svg
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.96 42.04"
            className={style}
            onClick={onClick}
        >
            <g id="OBJECTS">
                <rect className={styles["cls-2"]} x=".5" y=".5" width="44.96" height="41.04" />
                <rect className={styles["cls-3"]} x=".5" y=".5" width="44.96" height="41.04" />
                <polygon className={styles["cls-5"]} points="7.8 4.09 6.46 3.29 4.6 8.54 5.54 14.69 4.82 15.11 5.92 16.01 5.09 16.64 6.07 17.77 5.5 18.4 7.02 20.17 14.97 17.84 19.97 13.41 7.94 4.09 7.8 4.09" />
                <polygon className={styles["cls-5"]} points="40.53 14.73 41.63 8.47 39.55 3.3 26.18 13.41 31.48 17.95 39.13 20.2 40.72 18.4 40.11 17.58 41.14 16.98 40.38 15.97 41.17 15.22 40.53 14.73" />
                <polygon className={styles["cls-4"]} points="41.67 28.31 39.68 36.48 30.94 33.94 26.27 36.45 26.26 36.36 19.75 36.4 15.03 33.94 6.48 36.41 4.16 28.2 6.89 20.14 14.77 17.81 19.88 13.47 19.58 20.63 12.27 21.05 15.76 27.64 20.34 30.27 19.99 33.41 26.04 33.36 25.83 30.3 30.16 27.66 33.46 21.06 26.24 20.43 26.39 25.2 24.92 29.89 20.9 29.81 19.39 25.28 19.88 13.47 6.41 3.19 17.49 8.07 28.29 8.11 39.42 3.37 26.07 13.42 31 17.62 31.2 17.81 39.08 20.14 41.67 28.31" />
                <polygon className={styles["cls-1"]} points="15.22 24.13 18.02 22.67 19.22 25.11 15.22 24.13" />
                <polygon className={styles["cls-1"]} points="30.69 24.1 27.89 22.69 26.69 25.05 30.69 24.1" />
            </g>
        </svg>
    )
}

export default MetaMaskLogoActive