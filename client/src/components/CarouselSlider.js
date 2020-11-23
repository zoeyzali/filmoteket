import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from '../images/blueisthewarmestcolor.jpg'
import img2 from '../images/tree-of-life-still.jpeg'
import img3 from '../images/mommy-still.png'

class CarouselSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoPlay: true,
            focusOnSelect: true,
            fade: true,
            speed: 200,
            cssEase: 'linear',
            // slidesToScroll: 1,
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
                        <img src={img1}
                            className="carousel-img img-fluid"
                            alt="sliderposter"
                        />
                        <img src={img2}
                            className="carousel-img img-fluid"
                            alt="sliderposter"
                        />
                        <img src={img3}
                            className="carousel-img img-fluid"
                            alt="sliderposter"
                        />
                    </Slider>
                </div>
                <div className="red-box"></div>
                <div className="red-box overlay"></div>
            </div>
        )
    }
}

export default CarouselSlider
/**                        <img src={require( '../images/melancholia-148.jpg' )}
                            className="carousel-img  img-fluid" alt="sliderposter" />
                        <img src={require( '../images/oslo-31-aug.png' )}
                            className="carousel-img img-fluid" alt="sliderposter" />
 */