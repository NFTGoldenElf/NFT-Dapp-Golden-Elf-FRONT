import { FC } from "react";
import tailwindStyle from "../tailwindStyle";
import styles from './GoldenElfHeader.module.css'

const GoldenElfHeader: FC<tailwindStyle> = ({ style }) => {
    return (
        <svg
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 120.99 28.61"
            className={`${styles.svg} ${style}`}
        >
            <g id="Layer_3" data-name="Layer 3">
                <g id="logo">
                    <path className={styles["cls-1"]} d="m111.43,16.4l-1.1-.31s-.08.02-.07.06l.31,1.04s-.04.08-.08.06l-.98-.57s-.08,0-.08.04v1.08s-.05.07-.08.04l-.79-.79s-.08-.02-.09.02l-.29,1.05s-.08.05-.1.01l-.55-.95s-.07-.04-.1,0l-.56.94s-.09.03-.1-.01l-.27-1.05s-.06-.05-.09-.02l-.8.77s-.09,0-.09-.04l.03-1.08s-.05-.07-.08-.05l-.99.55s-.09-.01-.08-.06l.32-1.04s-.03-.08-.07-.06l-1.1.29s-.09-.04-.06-.08l.6-.93s0-.08-.05-.08h-1.15s-.07-.05-.04-.08l.83-.75s.02-.08-.02-.09l-1.11-.27s-.06-.07-.01-.1l1.01-.52s.04-.07,0-.09l-1-.53s-.03-.08.01-.1l1.11-.25s.06-.06.03-.09l-.82-.76s0-.09.04-.09l1.14.03s.07-.04.05-.08l-.58-.93s.01-.09.06-.08l1.1.31s.08-.02.07-.06l-.31-1.04s.04-.08.08-.06l.98.57s.08,0,.08-.04v-1.08s.05-.07.08-.04l.79.79s.08.02.09-.02l.29-1.05s.08-.05.1-.01l.55.95s.07.04.1,0l.56-.94s.09-.03.1.01l.27,1.05s.06.05.09.02l.8-.77s.09,0,.09.04l-.03,1.08s.05.07.08.05l.99-.55s.09.01.08.06l-.32,1.04s.03.08.07.06l1.1-.29s.09.04.06.08l-.6.93s0,.08.05.08h1.15s.07.05.04.08l-.83.75s-.02.08.02.09l1.11.27s.06.07.01.1l-1.01.52s-.04.07,0,.09l1,.53s.03.08-.01.1l-1.11.25s-.06.06-.03.09l.82.76s0,.09-.04.09l-1.14-.03s-.07.04-.05.08l.58.93s-.01.09-.06.08Z" />
                    <path className={styles["cls-1"]} d="m101.55,16.7c.04.06-.05.13-.1.07-4.28-4.23-3.91-10.96.37-14.49,3.92-3.23,10.26-3.06,14.29.68.06.05-.01.13-.08.1-4.01-2.31-9.15-1.9-12.55.96-3.72,3.13-4.56,8.5-1.93,12.68Z" />
                    <path className={styles["cls-1"]} d="m112.53,8.93c-.04-.06.04-.13.1-.08,4.49,4.03,4.46,10.77.36,14.49-3.75,3.4-10.09,3.53-14.31-.03-.06-.05,0-.13.07-.1,4.12,2.12,9.23,1.49,12.49-1.53,3.55-3.29,4.13-8.7,1.29-12.75Z" />
                    <path className={styles["cls-1"]} d="m103.12,7.92c-.06.04-.14-.04-.08-.09,4.31-4.2,11.44-4.08,15.3-.15,3.54,3.59,3.59,9.6-.22,13.55-.05.05-.14,0-.1-.07,2.3-3.88,1.69-8.72-1.45-11.84-3.43-3.41-9.13-4.02-13.45-1.39Z" />
                    <path className={styles["cls-1"]} d="m109.92,19.74c.07-.03.12.07.06.11-5.13,3.28-12.07,1.78-15.01-2.81-2.69-4.2-1.45-10.1,3.13-13.22.06-.04.14.03.09.09-3.08,3.35-3.53,8.21-1.13,11.87,2.62,4,8.07,5.7,12.87,3.96Z" />
                </g>
                <text className={styles["cls-2"]} transform="translate(0 23.11) scale(1.02 1)"><tspan x="0" y="0">GoldenElf</tspan></text>
            </g>
        </svg>
    )
}

export default GoldenElfHeader