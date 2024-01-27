import { FC } from "react";
import styles from './Arrows.module.css'

interface Props {
    currentSection: any
}

const Arrows: FC<Props> = ({ currentSection }) => {

    const scrollToSection = (sectionIndex: any) => {
        
        const sections = document.querySelectorAll('section');
        const targetSection = sections[sectionIndex-1];
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPreviousSection = () => {
        if (currentSection > 0) {
            scrollToSection(currentSection - 1);
        }
    };

    const scrollToNextSection = () => {
        const sections = document.querySelectorAll('section');
        if (currentSection <= sections.length - 1) {
            scrollToSection(currentSection + 1);
        }
    };

    return (
        <svg
            id="Capa_2"
            data-name="Capa 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.25 76.77"
        >
            <g id="OBJECTS">
                <g>
                    <polygon onClick={scrollToPreviousSection} className={styles["cls-1"]} points="1.86 16.82 0 15.55 14.39 0 28.25 14.97 26.39 16.24 14.39 3.28 1.86 16.82" />
                    <polygon onClick={scrollToNextSection} className={styles["cls-1"]} points="13.86 76.77 0 61.8 1.86 60.53 13.86 73.48 26.39 59.94 28.25 61.21 13.86 76.77" />
                </g>
            </g>
        </svg>
    )
}

export default Arrows;