import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import items from "../dataX";
import $ from 'jquery';

const ImgSlider = () => {

    $(document).ready(function () {
        $('.ImgSlider .imgSmall ').click(function (e) {
            e.preventDefault()
            console.log(this)
            $('.fullImage ').attr('src', $(this).attr('src'))
        })
    });

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
        ],
    };

    return (
        <span className="ImgSlider">
            <Slider {...settings}>
                {items.map((item) => (
                    <img className="imgSmall" src={item.img} width={1000} alt={item.name} />))}
            </Slider>
        </span>
    );
}

export default ImgSlider