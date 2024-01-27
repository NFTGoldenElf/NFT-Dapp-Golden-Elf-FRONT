import tailwindStyle from '../tailwindStyle'
import styles from './ButtonLanding.module.css'
import { FC } from 'react'

const ButtonLanding: FC<tailwindStyle> = ({ style }) => {
    
    return (
        <svg
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 127.99 40.28"
            className={`${styles.svg} ${style}`}
            
        >
            <g id="Layer_3" data-name="Layer 3">
                <g>
                    <g className={styles["cls-7"]}>
                        <rect className={styles["cls-1"]} x="4.38" y="4.38" width="119.24" height="31.53" />
                        <rect className={styles["cls-6"]} x=".38" y=".38" width="127.24" height="39.53" />
                    </g>
                    <text className={styles["cls-2"]} transform="translate(19.85 24.21) scale(.96 1)">
                        <tspan className={styles["cls-3"]} x="2%">WHITE PAPER</tspan>
                    </text>
                </g>
            </g>
        </svg>
    )
}

export default ButtonLanding