import { FC } from "react";
import ConnectMetaMask from "../../../components/nav-components/MetaMask/MetaMask.component.nav";
import NavItem from "../../../components/nav-components/Item/Item.component.nav";

const NavBar: FC = () => {
    return (
        <nav className="w-100 h-full flex text-white">
            <ul className="flex w-3/5 h-full items-center space-x-5 pl-4">
                <NavItem label='Inicio' />
                <NavItem label='Sobre Nosotros' />
                <NavItem label='NFT' />
                <NavItem label='Beneficios' />
                <NavItem label='Preguntas Frecuentes' />
            </ul>
            <ConnectMetaMask />
        </nav>
    )
}

export default NavBar