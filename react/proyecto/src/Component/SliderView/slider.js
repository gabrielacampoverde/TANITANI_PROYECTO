import React, { Component } from "react";
import Slider from "react-slick";
import {baseUrl} from "./../../config";

// const images={
//     {src: baseURL + "/abstract01.jpg"};
// }

export default class Banner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-home">
        <Slider {...settings}>
          <div className="item">
            <img src={baseUrl + "/floresyyo.jpg"} />
            <div className="caption center">
              <h3>El amor <br/> espera en el borde <br/> de un pétalo</h3>
            </div>
          </div>
          <div className="item">
            <img src={baseUrl + "/bouquet-of-flowers.jpg"} />
            <div className="caption left">
              <h3>El amor <br/> espera en el borde <br/> de un pétalo</h3>
            </div>
          </div>
          <div className="item">
            <img src={baseUrl + "/tulipanes.jpg"} />
            <div className="caption right">
              <h3>El amor <br/> espera en el borde <br/> de un pétalo</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}