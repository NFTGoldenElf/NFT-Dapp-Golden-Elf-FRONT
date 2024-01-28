
import Slider from "react-slick"
import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoldenElfImage from "../../../components/carousel-components/GoldenElfImage/GoldenElfImage.component";
import elf_1 from '/collection-examples/elf_1.png'
import elf_2 from '/collection-examples/elf_2.png'
import elf_3 from '/collection-examples/elf_3.png'
import elf_4 from '/collection-examples/elf_4.png'
import elf_5 from '/collection-examples/elf_5.png'
import elf_6 from '/collection-examples/elf_6.png'
import elf_7 from '/collection-examples/elf_7.png'
import elf_8 from '/collection-examples/elf_8.png'
import elf_9 from '/collection-examples/elf_9.png'
import elf_10 from '/collection-examples/elf_10.png'
import elf_11 from '/collection-examples/elf_11.png'
import elf_12 from '/collection-examples/elf_12.png'
import styles from './GoldenElfCarousel.module.css'

const images = [
    elf_1,
    elf_2,
    elf_3,
    elf_4,
    elf_5,
    elf_6,
    elf_7,
    elf_8,
    elf_9,
    elf_10,
    elf_11,
    elf_12
]

interface Props {
    slice: number[],
    rtl: boolean,
}

const GoldenElfCarousel: FC<Props> = ({ slice, rtl }) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        centerMode: true,
        rows: 2,
        cssEase: "linear",
        speed: 6000,
        autoplaySpeed: 0,
        slidesToShow: 3,
        vertical: true,
        pauseOnHover: false,
        rtl: rtl,
        className: styles["carousel-elf"],
        responsive: [
            {
              breakpoint: 600,
              settings: {
                className: styles["carousel-elf-500"],
                slidesToShow: 4,
              }
            },

          ]
    }
    return (
        <Slider {...settings}>
            {images.slice(slice[0], slice[1]).map((img, index) => {
                return (
                    <GoldenElfImage key={index} img={img} />
                )
            })}
        </Slider>
    )
}

export default GoldenElfCarousel