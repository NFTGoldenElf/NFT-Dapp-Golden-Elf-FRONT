import { FC } from "react"

const NavItem: FC<{ label: string }> = ({ label }) => {
    return (
        <li className="hover:uppercase hover:border-b-2 hover:border-dorado hover:cursor-pointer  transition duration-300 ">
            {label}
        </li>
    )
}

export default NavItem