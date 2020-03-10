import React, { Component } from 'react';
// import { Container } from 'reactstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class CarouselSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            autoPlay: true,
            focusOnSelect: true,
            fade: true,
            speed: 100,
            slidesToScroll: 3
        };
        return (
            <div className="carousel-container">
                <div
                    className="carousel-slider mx-auto">
                    <Slider {...settings}>
                        <img src={require( '../images/blueisthewarmestcolor.jpg' )} className="carousel-img img-fluid" alt="sliderposter" />
                        <img src={require( '../images/thewhiteribbonSlides.jpg' )} className="carousel-img img-fluid" alt="sliderposter" />
                        <img src={require( '../images/amourSlide.jpg' )}
                            className="carousel-img  img-fluid" alt="sliderposter" />
                        <img src={require( '../images/pulpfictionSlides.jpg' )} className="carousel-img img-fluid" alt="sliderposter" />
                    </Slider>
                </div>
                <div className="red-box"></div>
                <div className="red-box overlay"></div>
            </div>
        )
    }
}

export default CarouselSlider

