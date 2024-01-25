import { FC } from "react";
import NavBar from "../../containers/navbar/NavBar/NavBar.nav";
import MetaMaskLogo from "../../components/svg/MetaMaskLogo/MetaMaskLogo";
import GoldenElfLogo from "../../components/svg/GoldenElfLogo/GoldenElfLogo";

const Landing: FC = () => {
    return (
        <>
            <header className="fixed top-0 w-screen h-8% backdrop-grayscale backdrop-saturate-50">
                <NavBar />
            </header>

            

            <section className="bg-[url('/backgrounds/main-background.jpg')] bg-cover bg-no-repeat bg-center h-104% text-center flex items-center justify-center">
                
            </section>
            <section className="h-72% bg-yellow-500 text-center flex items-center justify-center">
            <GoldenElfLogo style="w-GoldenElfLogo"/>
            </section>
            

            <footer className="w-100 h-8% bg-red-400 text-center flex items-center justify-center">
                Footer
            </footer>

        </>
    )
}

export default Landing