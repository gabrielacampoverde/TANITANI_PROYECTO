import React, { Component } from 'react';
import { baseUrl } from "./../../config";
import { URL_BACKEND } from '../../environments/environments';
import logo from "./../../logo.png"

export default class Cardproducto extends Component {
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

            <div>
                <div className="banner-product">
                    <h4>“El amor espera en el borde de un pétalo.”</h4>
                </div>
                <div className="sectionProductos">
                    <div className="container">
                        <div className="titlecard">
                            <h1>DESTACADOS</h1>
                        </div>
                        <div className="product-list">
                        {
                            productos.map((producto, indice) => {
                                return(
                                    <div className="product-item card">
                                        <div className="cont-card">
                                            <div className="product-image">
                                                <img src={producto.pro_img} />
                                            </div>
                                            <div className="product-text">
                                                <h4>{producto.pro_nom}</h4>
                                                <h5>S/ 75.00</h5>
                                            </div>
                                        </div>
                                        <div className="cont-btn">
                                            <div className="buttons-actions">
                                                <div className="icons">
                                                    <a href="#" className="item">
                                                        <i className="icon-heart"></i>
                                                    </a>
                                                    <a href="#" className="item">
                                                        <i className="icon-magnifier"></i>
                                                    </a>
                                                    <a href="#" className="item">
                                                        <i className="icon-shopping-cart"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            )
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}