import React, { Component } from 'react';
import { baseUrl } from "./../../config";
import logo from "./../../logo.png"

export default class Cardproducto extends Component {

    render() {

        return (
            <div className="sectionProductos">
                <div className="banner-red">
                    <h4>“El amor espera en el borde de un pétalo.”</h4>
                </div>
                <div className="container">
                    <div className="product-list">
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/bouquet-1.png"} /> 
                                <div className="textproduct">
                                    <h4>Bouquete Rosas Forever</h4>
                                    <h5>s/. 75</h5>
                                </div>
                            </div>
                            <div className="buttons-actions flex">
                                <div className="flex-content">
                                        <div className="item">
                                            <i className="icon-heart"></i>
                                        </div>
                                        <div className="item">
                                            <i className="icon-magnifier"></i>
                                        </div>
                                        <div className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </div>
                                </div>
                                <div className="btn-add-to-cart">
                                    <button className="btn btn-success btn-block">Agregar al carrito</button>
                                </div>
                            </div>                           
                        </div>
                        <div className="card">
                            <div>
                                <img src={baseUrl + "/bouquet-1.png"} /> 
                                <div className="textproduct">
                                    <h4>Bouquete Rosas Forever</h4>
                                    <h5>s/. 75</h5>
                                </div>
                            </div>
                     
                        </div>
                        <div className="card">
                            <div>
                                <img src={baseUrl + "/bouquet-1.png"} /> 
                                <div className="textproduct">
                                    <h4>Bouquete Rosas Forever</h4>
                                    <h5>s/. 75</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}