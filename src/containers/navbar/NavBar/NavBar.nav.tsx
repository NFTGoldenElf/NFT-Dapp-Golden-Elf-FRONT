import { FC } from "react";
import ConnectMetaMask from "../../../components/nav-components/MetaMask/MetaMask.component.nav";
import NavItem from "../../../components/nav-components/Item/Item.component.nav";
import GoldenElfHeader from "../../../components/svg/GoldenElfHeader/GoldenElfHeader";

const NavBar: FC = () => {
    return (
        <nav className="relative font-MonM text-xl w-100 h-full flex text-white">
            <ul className="flex w-3/5 h-full items-center gap-20 space-x-5 pl-20">
                <NavItem label='INICIO' />
                <NavItem label='Acerca de' />
                <NavItem label='Golden Elf' />
                <NavItem label='NFTs' />
                <NavItem label='Beneficios' />
                <NavItem label='FAQs' />
            </ul>
            <div className="relative left-8 flex items-center">
                <ConnectMetaMask />
            </div>
            <div className="absolute right-0 pr-12 flex items-center h-full">
                <GoldenElfHeader style="w-52"/>
            </div>

        </nav>
    )
}

export default NavBar