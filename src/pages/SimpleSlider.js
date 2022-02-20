import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import volleyball from './../images/volleyball.png'
import Slider from "react-slick";
import "./SimpleSlider.css"
import hackathon from './../images/hackathon.png'
import soccer from './../images/soccer2.jpeg'

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: true, 
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className="image-container">
        <img src={volleyball} className="image"/>  
        </div>
        <div className="image-container">
        <img src={hackathon} className="image"/>  
        </div>
        <div className="image-container">
        <img src={soccer} className="image"/>  
        </div>
      </Slider>
    );
  }
  