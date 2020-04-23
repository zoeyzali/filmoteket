import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class CarouselSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoPlay: true,
            focusOnSelect: true,
            fade: true,
            speed: 300,
            cssEase: 'linear',
            slidesToScroll: 1,
            slidesToShow: 1,
            mobileFirst: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 425,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="carousel-container">
                <div
                    className="carousel-slider mx-auto">
                    <Slider {...settings}>
                        <img src={require( '../images/blueisthewarmestcolor.jpg' )}
                            className="carousel-img img-fluid" alt="sliderposter" />
                        <img src={require( '../images/tree-of-life-still.jpeg' )}
                            className="carousel-img img-fluid" alt="sliderposter" />
                        <img src={require( '../images/melancholia-148.jpg' )}
                            className="carousel-img  img-fluid" alt="sliderposter" />
                        <img src={require( '../images/mommy-still.png' )}
                            className="carousel-img img-fluid" alt="sliderposter" />
                        <img src={require( '../images/oslo-31-aug.png' )}
                            className="carousel-img img-fluid" alt="sliderposter" />
                    </Slider>
                </div>
                <div className="red-box"></div>
                <div className="red-box overlay"></div>
            </div>
        )
    }
}

export default CarouselSlider

