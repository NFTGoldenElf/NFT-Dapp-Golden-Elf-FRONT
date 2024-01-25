import { FC } from "react";
import NavBar from "../../containers/navbar/NavBar/NavBar.nav";
import GoldenElfLogo from "../../components/svg/GoldenElfLogo/GoldenElfLogo";
import Ds from "../../../public/LogosContacto/Ds.png";
import Equis from "../../../public/LogosContacto/equis.png";
import Face from "../../../public/LogosContacto/face.png";
import Ig from "../../../public/LogosContacto/ig.png";

const Landing: FC = () => {
  return (
    <>
      <header className="fixed top-0 w-screen h-8% backdrop-grayscale backdrop-saturate-50 z-10">
        <NavBar />
      </header>

      <section className="relative bg-[url('/backgrounds/main-background.jpg')] bg-cover bg-no-repeat bg-center h-104% text-center flex items-center justify-center">
        <div className="flex flex-col items-end ml-40">
          <GoldenElfLogo style="w-GoldenElfLogo mb-2 flex-shrink-0 ml-96 mb-20" />
          <button className="font-GonB flex-grow text-white bg-[#837f72] outline outline-offset-4 outline-[#837f72] p-2 ">
            BOTÓN DE ALGO
          </button>
        </div>
        <div className="flex items-center self-end">
          <img src={Ds} className="h-10 bg-[#837f72] p-1 mr-2" alt="Discord" />          
          <img src={Face} className="h-10 mr-2 " alt="Facebook" />
          <img src={Equis} className="h-8 mr-2 invert" alt="Equis" />
          <img src={Ig} className="h-10 mr-4" alt="Instagram" />
        </div>
      </section>

      <footer className="w-100 h-8% bg-dorado text-center flex items-center justify-center backdrop-blur-xl font-GonR text-white ">
        Footer
      </footer>
    </>
  );
};

export default Landing;
