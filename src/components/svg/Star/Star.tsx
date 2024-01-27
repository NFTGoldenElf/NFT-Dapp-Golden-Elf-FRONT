import { FC, useState } from "react";
import styles from './Star.module.css'

const Star: FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={isHovered ? styles.hovered : ''}
            viewBox="0 0 242 244">
            <defs>
                <filter id="outer-glow-1" filterUnits="userSpaceOnUse">
                    <feOffset dx="0" dy="0" />
                    <feGaussianBlur result="blur" stdDeviation="3" />
                    <feFlood floodColor="#fff" floodOpacity="1" />
                    <feComposite in2="blur" operator="in" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Layer_9" data-name="Layer 9">
                <polygon className={styles["cls-1"]} points="121.19 50.42 159.84 9.33 163.81 66.4 219.29 60.5 186.55 106.67 232.89 138.72 178.77 152.4 194.29 207.4 144.11 182.19 121.55 234.4 98.79 182.09 48.7 207.09 64.01 152.16 9.83 138.25 56.05 106.4 23.13 60.08 78.63 66.22 82.38 9.17 121.19 50.42" />
            </g>
        </svg>
    )
}

export default Star