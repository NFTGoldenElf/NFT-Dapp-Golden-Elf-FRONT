import { FC } from "react";
import NavBar from "../../containers/navbar/NavBar/NavBar.nav";
import GoldenElfLogo from "../../components/svg/GoldenElfLogo/GoldenElfLogo";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import ButtonLanding from "../../components/svg/ButtonLanding/ButtonLanding";

const Landing: FC = () => {
    return (
        <>
            <header className="fixed top-0 w-screen h-10% backdrop-grayscale backdrop-saturate-50 z-10">
                <NavBar />
            </header>



            <section className="bg-[url('/backgrounds/main-background.jpg')] relative bg-cover bg-no-repeat bg-center h-106% text-center flex items-center justify-center">
                <div className="w-3/5 absolute right-48 bottom-80">
                    <GoldenElfLogo style=""/>
                </div>

                <ButtonLanding style="w-60 cursor-pointer absolute bottom-40 right-64" />
                <div className="flex absolute bottom-4 right-28 gap-6">
                    <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                        <IconContext.Provider value={{ color: '#ffffff', size: '40px' }}>
                            <FaDiscord />
                        </IconContext.Provider>
                    </article>
                    <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                        <FacebookIcon sx={{
                            fontSize: 40,
                            color: '#ffffff'
                        }} />
                    </article>
                    <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                        <InstagramIcon sx={{
                            fontSize: 40,
                            color: '#ffffff'
                        }} />
                    </article>
                    <article className="p-1.5 w-fit hover:bg-gray-500 cursor-pointer rounded transition ease-in-out duration-300">
                        <XIcon sx={{
                            fontSize: 40,
                            color: '#ffffff'
                        }} />
                    </article>
                </div>
            </section>

        </>
    )
}

export default Landing
