import Slider from "react-slick"
import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card_1 from '/cards/Card-1.png'
import Card_2 from '/cards/Card-2.png'
import Card_3 from '/cards/Card-3.png'
import Card_4 from '/cards/Card-4.png'
import Card_5 from '/cards/Card-5.png'
import styles from './InfoCarousel.module.css'
import InfoImage from "../../../components/carousel-components/InfoImage/InfoImage.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
    Card_1,
    Card_2,
    Card_3,
    Card_4,
    Card_5
]

const CustomPrevArrow = (props: any) => (
    <div onClick={props.onClick} className={`${styles["arrow"]} ${styles["prev"]}`}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </div>
);

const CustomNextArrow = (props: any) => (
    <div onClick={props.onClick} className={`${styles["arrow"]} ${styles["next"]}`}>
        <FontAwesomeIcon icon={faChevronRight} />
    </div>
);

const InfoCarousel: FC = () => {
    const settings = {
        dots: false,
        slidesToShow: 1,
        infinite: true,
        className: `${styles["carousel-info"]}`,
        cssEase: "linear",
        speed: 1000,
        autoplay: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    }
    return (
        <Slider {...settings}>
            {images.map((img, index) => {
                return (
                    <InfoImage key={index} img={img} />
                )
            })}
        </Slider>
    )
}

export default InfoCarousel