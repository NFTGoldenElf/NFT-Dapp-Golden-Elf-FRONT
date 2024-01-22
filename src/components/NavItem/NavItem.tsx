import { FC } from "react"

const NavItem: FC<{ label: string }> = ({ label }) => {
    return (
        <li>
            {label}
        </li>
    )
}

export default NavItem