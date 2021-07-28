import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SliderBadgingSrc from '../assets/images/slider-badging.jpg';
import SliderBadagSrc from '../assets/images/slider-badag.jpg';
import sliderScale from '../assets/images/slider-scale.jpg';
import sliderScales from '../assets/images/slider-scales.jpg';

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
      };

    return (
        <Slider className="carousel" {...settings} >
            <div className="carousel__item">
                <img alt="" src={SliderBadgingSrc} />
            </div>

            <div className="carousel__item">
                <img alt="" src={SliderBadagSrc} />
            </div>

            <div className="carousel__item">
                <img alt="" src={sliderScale} />
            </div>

            <div className="carousel__item">
                <img alt="" src={sliderScales} />
            </div>
        </Slider>
    )
}

export default ImgSlider
