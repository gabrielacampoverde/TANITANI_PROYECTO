import React, { Component } from "react";
import Slider from "react-slick";
import {baseUrl} from "./../../config";

// const images={
//     {src: baseURL + "/abstract01.jpg"};
// }

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="item">
          <img src={baseUrl + "/floresyyo.jpg"} />
          </div>
          <div className="item">
          <img src={baseUrl + "/bouquet-of-flowers.jpg"} />
          </div>
          <div className="item">
          <img src={baseUrl + "/tulipanes.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}