import { FC, useLayoutEffect, useState } from "react";
import ConnectMetaMask from "../../../components/nav-components/MetaMask/MetaMask.component.nav";
import NavItem from "../../../components/nav-components/Item/Item.component.nav";
import GoldenElfHeader from "../../../components/svg/GoldenElfHeader/GoldenElfHeader";
import IdiomSelector from "../../../components/svg/IdiomSelector/IdiomSelector";
import styles from './NavBar.module.css'

const NavBar: FC = () => {   
    const [isShowing, setIsShowing] = useState(false)

    const myFunction = () => {
        setIsShowing(!isShowing)
        if (isShowing === true) {
            let items = document.getElementById("items");
            items?.classList.replace(styles["ul-items"], styles["show"])
        } else {
            let items = document.getElementById("items");
            items?.classList.replace(styles["show"], styles["ul-items"])
        }
    }
 
     return (
         <nav className={styles.nav}>
             <div className={styles.togglebtn} onClick={myFunction}>
                 <span></span>
                 <span></span>
                 <span></span>
 
             </div>
             <ul className={styles["ul-items"]} id="items">
                 <NavItem label='INICIO' scrollId="section-1" />
                 <NavItem label='Acerca de' scrollId="section-2" />
                 <NavItem label='Golden Elf' scrollId="section-3" />
                 <NavItem label='Beneficios' scrollId="section-4" />
                 <NavItem label='FAQs' scrollId="section-5" />
                 <NavItem label='Contactos' scrollId="section-6" />
             </ul>
             <div className={styles["other-container"]}>
                 <div className={styles["div-metamask"]}>
                     <ConnectMetaMask />
                 </div>
                 <div className={styles["div-idiom-selector"]}>
                     <IdiomSelector />
                 </div>
                 <div className={styles["div-golden-elf-header"]}>
                     <GoldenElfHeader style="xl:w-52 lg:w-40 md:w-28 sm:w-36 phone:w-28" />
                 </div>
             </div>
         </nav>
     )
 }
 
 export default NavBar