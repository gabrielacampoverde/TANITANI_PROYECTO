import React, { Component } from "react";
import Slider from "react-slick";
import {baseUrl} from "./../../config";
import {Animated} from "react-animated-css";

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
            <Animated animationIn="fadeInLeft" animationOut="flash" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
              <h3>El amor <br/> no hay que comprenderlo <br/> sino sentirlo</h3>
             </Animated>
            </div>
          </div>
          <div className="item">
            <img src={baseUrl + "/bouquet-of-flowers.jpg"} />
            <div className="caption left">
            <Animated animationIn="fadeInLeft" animationOut="flash" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
              <h3>El amor <br/> espera en el borde <br/> de un pétalo</h3>
              </Animated>
            </div>
          </div>
          <div className="item">
            <img src={baseUrl + "/tulipanes.jpg"} />
            <div className="caption right">
            <Animated animationIn="fadeInRight" animationOut="flash" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>

              <h3>Una Rosa<br/> para un persona <br/> super especial </h3>
              </Animated>
              
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}