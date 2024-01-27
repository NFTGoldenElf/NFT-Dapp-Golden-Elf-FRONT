import { FC, useEffect, useState } from "react";
import NavBar from "../../containers/navbar/NavBar/NavBar.nav";
import GoldenElfLogo from "../../components/svg/GoldenElfLogo/GoldenElfLogo";
import { FaDiscord } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from '@mui/icons-material/X';
import ButtonLanding from "../../components/svg/ButtonLanding/ButtonLanding";
import styles from './Landing.module.css'
import Arrows from "../../components/svg/Arrows/Arrows";
import Detail from "../../components/svg/Detail/Detail";
import GoldenElfCarousel from "../../containers/carousel/GoldenElfCarousel/GoldenElfCarousel";
import CollectionTitle from '../../components/svg/CollectionTitle/CollectionTitle'
import GoldenElfTitle from "../../components/svg/GoldenElfTitle/GoldenElfTitle";
import InfoCarousel from "../../containers/carousel/InfoCarousel/InfoCarousel";
import GuideBenefits from "../../components/svg/GuideBenefits/GuideBenefits";
import BenefitsTitle from "../../components/svg/BenefitsTitle/BenefitsTitle";
import FAQs from "../../components/svg/FAQs/FAQs";
import FAQsAccordion from "../../containers/accordions/FAQsAccordion/FAQsAccordion";
import FooterImage from '/cards/Footer.png'
import Star from "../../components/svg/Star/Star";

const Landing: FC = () => {
    const [currentSection, setCurrentSection] = useState(0);
    console.log(currentSection)

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        // Función para determinar la sección actual
        const getCurrentSection = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    return section.id;
                }
            }

            // Si ninguna sección está completamente visible, devuelve null
            return null;
        };

        // Manejador de eventos de scroll
        const handleScroll = () => {
            const currentSection = getCurrentSection();
            console.log('Sección actual:', currentSection);
        };

        // Registra el evento de scroll
        window.addEventListener('scroll', handleScroll, { capture: true });

        return () => {
            window.removeEventListener('scroll', handleScroll, { capture: true });
        };
    }, []);

    return (
        <>
            <header className={styles.header}>
                <NavBar />
            </header>

            <section className={styles["first-section"]} id="section-1">
                <div className="w-3/5 absolute right-48 bottom-80">
                    <GoldenElfLogo style="" />
                </div>

                <div className={styles.arrows}>
                    <Arrows currentSection={currentSection} />
                </div>

                <ButtonLanding style="w-60 cursor-pointer absolute bottom-40 right-64" />

                <div className={styles.detail}>
                    <Detail />
                </div>

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

            <section className={styles["second-section"]} id="section-2">
                <div className={styles.carousel}>
                    <div className={styles["elf-carousel-first-column"]}>
                        <GoldenElfCarousel rtl={false} slice={[0, 6]} />
                    </div>
                    <div className={styles["elf-carousel-second-column"]}>
                        <GoldenElfCarousel rtl={true} slice={[6, 12]} />
                    </div>
                </div>
                <div className={styles["text-second-section"]}>
                    <CollectionTitle />
                    <p className={styles["p-second-section"]}>
                        Golden Elf es una colección de 9,999 NFT generados de manera aleatoria y con estilo que existen en la cadena de bloques de Ethereum. Golden Elf es
                        reconocido como pionero en el desarrollo de productos de WEB3 y NFT.
                        <br />
                        <br />
                        Gran parte de nuestra misión se centra en desarrollar y producir herramientas
                        que recompensen a los titulares de la mejor manera posible y, lo que es aún más importante, en conectar a la comunidad de Ethereum.
                        Nuestro objetivo principal es lanzar nuevos productos con cada parte de nuestra historia, a los cuales podrás acceder a través de nuestro sitio web.
                    </p>
                </div>
            </section>

            <section className={styles["third-section"]} id="section-3">
                <div className={styles["title-third-section"]}>
                    <GoldenElfTitle />
                </div>
                <div className={styles["carousel-third-section"]}>
                    <InfoCarousel />
                </div>
                <div className={styles["white-line-third-section"]}></div>
            </section>

            <section className={styles["fourth-section"]} id="section-4">
                <div className={styles["benefit-title"]}>
                    <BenefitsTitle />
                </div>
                <div className={styles["guide-benefits"]}>
                    <GuideBenefits />
                </div>
                <div className={styles["white-line-fourth-section"]}></div>
            </section>

            <section className={styles["fifth-section"]} id="section-5">
                <div className={styles["faqs"]}>
                    <FAQs />
                </div>
                <div className={styles["faqs-accordion"]}>
                    <FAQsAccordion />
                </div>
                <div className={styles["white-line-third-section"]}></div>
            </section>

            <section className={styles["sixth-section"]} id="section-6">
                <div className={styles["star-footer"]}>
                    <Star />
                </div>
                <img src={FooterImage} alt="Footer" className={styles["footer-image"]}></img>
                <div className={styles["footer-text"]}>
                    <label>Copyright <label className={styles["gold-text"]}>© 2022 Grupo NapoleoN.</label> All Rights Reserved.</label>
                </div>
                <div className={styles["icons-footer"]}>
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
