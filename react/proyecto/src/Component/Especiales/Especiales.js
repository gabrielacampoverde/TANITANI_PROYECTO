import React, { Component, Fragment} from 'react';
import logo from "./../../logo.png";
import SimpleSlider from '../SliderView/slider'
import { URL_BACKEND } from '../../environments/environments';
import Cardproducto from '../CardProductos/Cardproducto'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          productos: [],
        };
        
      }
      async cargarPabellones() {
        let response = await fetch(`${URL_BACKEND}/api/producto`);
        let productoJSON = await response.json();
    
        
    
    
        this.setState(
          {
            productos: productoJSON.Producto
          }
        )
    
      }
    
      componentDidMount() {
        this.cargarPabellones();
      }

    render() {
        const { productos } = this.state;
        return (
               <main>
                <SimpleSlider></SimpleSlider>
                <div>
                <div className="sectionProductos">
                    <div className="container">
                        <div className="titlecard">
                            <h1>ESPECIALES</h1>
                        </div>
                <Cardproducto productos = { productos } num = {7}></Cardproducto>
                </div>
                </div></div>
               </main>
                
        )
    }

}