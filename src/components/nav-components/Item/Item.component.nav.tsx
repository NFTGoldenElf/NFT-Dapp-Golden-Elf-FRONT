import { FC } from "react"
import styles from './Item.module.css'

const NavItem: FC<{ label: string }> = ({ label }) => {
    return (
        <li className={`cursor-pointer relative ${styles.underline}`}>
            {label}
        </li>
    )
}

export default NavItem