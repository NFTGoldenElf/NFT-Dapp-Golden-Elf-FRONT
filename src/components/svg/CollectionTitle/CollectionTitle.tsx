import { FC } from "react";
import styles from './CollectionTitle.module.css'

const CollectionTitle: FC = () => {
    return (
        <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.83 128">
            <g id="_2" data-name="2">
                <text className={styles["cls-5"]} transform="translate(0 83.58) scale(.96 1)"><tspan x="0" y="0">NFTS</tspan></text>
                <text className={styles["cls-4"]} transform="translate(6.55 40.34)"><tspan x="0" y="0">NUESTRA</tspan><tspan className={styles["cls-8"]} x="0" y="43.2">C</tspan><tspan x="24.48" y="43.2">OLE</tspan><tspan className={styles["cls-8"]} x="97.99" y="43.2">C</tspan><tspan className="cls-7" x="122.47" y="43.2">CIÓN</tspan></text>
                <text className={styles["cls-1"]} transform="translate(10.12 39.13)"><tspan x="0" y="0">NUESTRA</tspan><tspan className={styles["cls-6"]} x="0" y="42.7">C</tspan><tspan x="24.2" y="42.7">OLE</tspan><tspan className={styles["cls-6"]} x="96.86" y="42.7">C</tspan><tspan className="cls-9" x="121.06" y="42.7">CIÓN</tspan></text>
                <line className={styles["cls-3"]} x1="6.29" y1="97.28" x2="222.55" y2="97.28" />
                <line className={styles["cls-2"]} x1="6.29" y1="104.68" x2="250.38" y2="104.68" />
            </g>
        </svg>
    )
}

export default CollectionTitle