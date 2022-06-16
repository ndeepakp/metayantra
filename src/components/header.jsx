import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  console.log(images);
  return (
    <div>
      <Slider {...settings}></Slider>
    </div>
  );
}
