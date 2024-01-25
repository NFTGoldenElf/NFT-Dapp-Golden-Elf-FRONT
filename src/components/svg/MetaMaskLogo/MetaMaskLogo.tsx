import styles from './MetaMaskLogo.module.css'
import { FC } from 'react'
import tailwindStyle from '../tailwindStyle'

const MetaMaskLogo: FC<tailwindStyle> = ({ style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45.96 42.04"
            className={`${styles.svg} ${style}`}
        >
            <g id="OBJECTS" className={styles.g}>
                <rect className={styles["className-2"]} x=".5" y=".5" width="44.96" height="41.04" />
                <rect className={styles["className-3"]} x=".5" y=".5" width="44.96" height="41.04" />
                <polyline className={styles["className-4"]} points="39.56 3.3 26.18 13.41 31.48 17.95 39.13 20.2 40.72 18.4 40.11 17.58 41.14 16.98 40.38 15.97 41.17 15.22 40.53 14.73 41.63 8.47 39.55 3.30 28.41 8.06 17.62 8.06 6.80 3.53 19.97 13.41 14.97 17.84 7.02 20.17 5.50 18.40 6.07 17.77 5.09 16.64 5.92 16.01 4.82 15.11 5.54 14.69 4.60 8.54 6.35 3.28" />
                <polyline className={styles["className-5"]} points="39.13 20.20 41.78 28.23 39.81 36.47 31.10 33.81 25.91 30.25 30.26 27.66 33.60 21.03 31.48 17.95" />
                <polyline className={styles["className-5"]} points="7.03 20.02 4.33 28.19 6.50 36.44 15.14 33.91 20.06 36.41 26.27 36.39 31.04 33.81" />
                <polyline className={styles["className-5"]} points="15.14 33.91 20.23 30.21 15.84 27.66 12.41 21.03 14.97 17.84" />
                <path className={styles["className-5"]} d="m20.37,30.28s.71-.52.73-.47,3.99.02,3.99.02l.82.49.33,3.05-6.15-.02.28-3.06Z" />
                <polygon className={styles["className-5"]} points="18.42 23.03 15.69 24.40 19.52 25.30 18.42 23.03" />
                <polygon className={styles["className-5"]} points="27.64 23.03 30.44 24.40 26.54 25.30 27.64 23.03" />
                <polyline className={styles["className-5"]} points="20.03 13.38 19.63 25.26 21.11 29.80" />
                <polyline className={styles["className-5"]} points="26.10 13.42 26.46 25.30 25.05 29.83" />
                <polygon className={styles["className-1"]} points="41.80 28.30 39.81 36.47 31.06 33.92 26.39 36.44 26.39 36.35 19.88 36.39 15.16 33.92 6.60 36.40 4.29 28.19 7.02 20.13 14.90 17.80 20.01 13.46 19.70 20.62 12.40 21.03 15.77 27.59 20.36 30.19 20.11 33.40 26.17 33.35 25.95 30.29 30.29 27.64 33.59 21.05 26.37 20.42 26.52 25.19 25.04 29.88 21.03 29.80 19.52 25.26 20.01 13.46 6.87 3.45 17.62 8.06 28.41 8.10 39.39 3.30 26.20 13.41 31.13 17.60 31.93 18.66 31.33 17.80 39.21 20.13 41.80 28.30" />
                <polygon className={styles["className-1"]} points="15.84 24.38 18.40 23.05 19.50 25.28 15.84 24.38" />
                <polygon className={styles["className-1"]} points="30.29 24.38 27.64 23.05 26.50 25.28 30.29 24.38" />
            </g>
        </svg>
    )
}

export default MetaMaskLogo