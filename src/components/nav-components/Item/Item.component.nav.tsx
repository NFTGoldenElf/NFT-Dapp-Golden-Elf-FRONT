import { FC } from "react"
import styles from './Item.module.css'

interface Props {
    label: string;
    scrollId: string;
}

const NavItem: FC<Props> = ({ label, scrollId }) => {
    const scrollToSection = () => {
        const section = document.getElementById(scrollId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <li className={`cursor-pointer relative ${styles.underline}`} onClick={scrollToSection}>
            {label}
        </li>
    )
}

export default NavItem