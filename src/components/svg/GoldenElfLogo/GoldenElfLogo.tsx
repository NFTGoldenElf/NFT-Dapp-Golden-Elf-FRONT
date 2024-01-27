import { FC } from "react";
import styles from './GoldenElfLogo.module.css'
import tailwindStyle from "../tailwindStyle";

const GoldenElfLogo: FC<tailwindStyle> = ({ style }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 504.17 211.25"
            className={`${styles.svg} ${style}`}
        >
            <defs>
                <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur result="blur" stdDeviation="1" />
                    <feFlood floodColor="#000" floodOpacity=".75" />
                    <feComposite in2="blur" operator="in" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g className={styles["cls-17"]}>
                <g id="Capa_2" data-name="Capa 2">
                    <g id="Layer_3" data-name="Layer 3">
                        <g>
                            <text className={styles["cls-19"]} transform="translate(126.36 125.29) scale(1.1 1)"><tspan className={styles["cls-23"]} x="0" y="0">G</tspan><tspan className={styles["cls-20"]} x="51.11" y="0">OLDEN</tspan></text>
                            <text className={styles["cls-7"]} transform="translate(129.46 122.39) scale(1.08 1)"><tspan className={styles["cls-34"]} x="0" y="0">G</tspan><tspan className={styles["cls-33"]} x="53.26" y="0">OLDEN</tspan></text>
                            <text className={styles["cls-19"]} transform="translate(309.28 179.73) scale(1.1 1)"><tspan className={styles["cls-22"]} x="0" y="0">E</tspan><tspan className={styles["cls-32"]} x="46.88" y="0">LF</tspan></text>
                            <text className={styles["cls-7"]} transform="translate(304.57 177.93) scale(1.1 1)"><tspan className={styles["cls-23"]} x="0" y="0">E</tspan><tspan className={styles["cls-20"]} x="46.43" y="0">LF</tspan></text>
                        </g>
                        <g>
                            <g>
                                <text className={`${styles["cls-8"]} ${styles.firstLine}`} transform="translate(1.47 150.91) scale(1.05 1)">
                                    <tspan className={styles["cls-10"]} x="0" y="0">Golden Elf es una colección privada de NFTs,</tspan>
                                </text>
                            </g>
                            <g>
                                <text className={styles["cls-8"]} transform="translate(1.47 150.91) scale(1.05 1)">
                                    <tspan x="45" y="18.49">objetos de colección digitales únicos.</tspan>
                                </text>
                            </g>
                        </g>
                        <rect className={styles["cls-15"]} x="67.18" y="53.38" width="55.86" height="64.97" />
                        <rect className={styles["cls-14"]} x="76.75" y="21.59" width="72.69" height="85.93" />
                        <text className={styles["cls-5"]} transform="translate(342.46 199.73) scale(1.1 1)"><tspan className={styles["cls-28"]} x="0" y="0">C</tspan><tspan x="10.17" y="0">OL</tspan><tspan className={styles["cls-25"]} x="30.77" y="0">E</tspan><tspan className={styles["cls-28"]} x="40.38" y="0">C</tspan><tspan x="50.55" y="0">CIÓN DE N</tspan><tspan className={styles["cls-2"]} x="130" y="0">F</tspan><tspan className={styles["cls-29"]} x="139.2" y="0">T</tspan></text>
                    </g>
                    <g id="Layer_4" data-name="Layer 4">
                        <polygon className={styles["cls-13"]} points="305.16 36 285.88 42.16 268.59 32.24 266.3 13.71 280.74 .52 301.04 2.61 311.91 18.4 305.16 36" />
                        <polygon className={styles["cls-6"]} points="312.71 43.23 303.2 46.27 294.68 41.38 293.55 32.25 300.67 25.75 310.67 26.78 316.03 34.56 312.71 43.23" />
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default GoldenElfLogo