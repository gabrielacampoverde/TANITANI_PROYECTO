import React, { Component, Fragment} from 'react';
import logo from "./../../logo.png";
import SimpleSlider from './../SliderView/slider'
import Cardproducto from './../CardProductos/Cardproducto'

export default class Home extends Component {
    

    render() {

        return (
           <Fragment>
               <SimpleSlider></SimpleSlider>
               <Cardproducto></Cardproducto>
           </Fragment>
                
        )
    }

}