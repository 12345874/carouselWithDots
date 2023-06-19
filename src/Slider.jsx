import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      <h2> Responsive </h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
            style={{ width: "95%", height: "14rem" }}
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/cHdMJQKG/svb-slider.jpg"
            style={{ width: "95%", height: "14rem" }}
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
            style={{ width: "95%", height: "14rem" }}
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/cHdMJQKG/svb-slider.jpg"
            style={{ width: "95%", height: "14rem" }}
          />
        </div>
        <div>
          <img
            src="https://i.postimg.cc/qBGQNc37/ro-slider.jpg"
            style={{ width: "95%", height: "14rem" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCarousel;
