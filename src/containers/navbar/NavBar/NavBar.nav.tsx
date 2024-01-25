import { FC } from "react";
import ConnectMetaMask from "../../../components/nav-components/MetaMask/MetaMask.component.nav";
import NavItem from "../../../components/nav-components/Item/Item.component.nav";
import LogoMask from "../../../../public/logo.png"

const NavBar: FC = () => {
    return (
        <nav className="w-100 h-full flex text-white font-MonM">
            <ul className="flex w-3/5 h-full items-center justify-evenly pl-4 ml-20">
                <NavItem label='Inicio' />
                <NavItem label='Acerca de' />
                <NavItem label='Golden Elf' />
                <NavItem label='NFTs' />
                <NavItem label='Beneficios' />
                <NavItem label='FAQs' />
                
            </ul>
       
            <img src={LogoMask} alt="Logo" className="h-14"/>
            <h1 className="ml-20 flex items-center mr-10 bg-gray-200 text-black"> *ESP</h1>
            <ConnectMetaMask />                
      

            

        </nav>
    )
}

export default NavBar