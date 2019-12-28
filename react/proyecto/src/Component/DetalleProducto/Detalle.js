import React, { Component } from 'react';
import { baseUrl } from "./../../config";
import NumericInput from 'react-numeric-input';
import logo from "./../../logo.png"

export default class Detalle extends Component {

    render() {

        return (
            <div>
                <div className="detail-product">
                <div className="media">
                            <div className="product-image">
                            <img src={baseUrl + "/otras_img/bouquet-2.png"} />
                            
                        </div>
                        </div>
                        <div className="caption">
                            <h1>Bouquet Rosas “FOREVER”</h1>
                            <h2>s/. 75</h2>
                            <p>Exclusivo arreglo floral de 18 rosas y follaje fino en florero de
cerámica decorativa Glam dorada. 50 cm. alto. Color de las rosas
según su elección.</p>
                            <div className="colores">
                                <h3>Color</h3>
                                <input type="radio" name="color" value="male"/> rojo
                                <input type="radio" name="color" value="female"/> amarillo
                                <input type="radio" name="color" value="other"/> verde      
                            </div>
                            
                            <div className="quantity">
                                <NumericInput className="contador" min={0} max={100} value={50}/>

                            </div>
                            <div className="cont-btn">
                                <button id="button-detalle">
                                Añadir al carrito                
                                </button>
                                <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>

                            </div>  
                            </div>
                           

                        </div>
                </div>
                  
                <div className="sectionProductos">
                <div className="container">
                    <div className="titlecard">
                        <h1>PRODUCTOS QUE TE PODRIAN INTERESAR</h1>
                    </div>
                    <div className="product-list">
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/otras_img/bouquet-2.png"} /> 
                                <div className="buttons-actions">
                                    <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button className="btn-add">Agregar al carrito</button>
                                    </div>
                                </div> 
                            </div>
                             
                            <div className="product-text">
                                <h4>Bouquete Rosas Forever</h4>
                                <h5>S/ 75.00</h5>
                            </div>                         
                        </div>
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/otras_img/bouquet-2.png"} /> 
                                <div className="buttons-actions">
                                    <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button className="btn-add">Agregar al carrito</button>
                                    </div>
                                </div> 
                            </div>
                             
                            <div className="product-text">
                                <h4>Bouquete Rosas Forever</h4>
                                <h5>S/ 75.00</h5>
                            </div>                         
                        </div>
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/otras_img/bouquet-2.png"} /> 
                                <div className="buttons-actions">
                                    <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button className="btn-add">Agregar al carrito</button>
                                    </div>
                                </div> 
                            </div>
                             
                            <div className="product-text">
                                <h4>Bouquete Rosas Forever</h4>
                                <h5>S/ 75.00</h5>
                            </div>                         
                        </div>
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/otras_img/bouquet-2.png"} /> 
                                <div className="buttons-actions">
                                    <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button className="btn-add">Agregar al carrito</button>
                                    </div>
                                </div> 
                            </div>
                             
                            <div className="product-text">
                                <h4>Bouquete Rosas Forever</h4>
                                <h5>S/ 75.00</h5>
                            </div>                         
                        </div>
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/otras_img/bouquet-2.png"} /> 
                                <div className="buttons-actions">
                                    <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button className="btn-add">Agregar al carrito</button>
                                    </div>
                                </div> 
                            </div>
                             
                            <div className="product-text">
                                <h4>Bouquete Rosas Forever</h4>
                                <h5>S/ 75.00</h5>
                            </div>                         
                        </div>
                        <div className="product-item card">
                            <div className="product-image">
                                <img src={baseUrl + "/otras_img/bouquet-2.png"} /> 
                                <div className="buttons-actions">
                                    <div className="icons">
                                        <a href="#" className="item">
                                            <i className="icon-heart"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-magnifier"></i>
                                        </a>
                                        <a href="#"  className="item">
                                            <i className="icon-shopping-cart"></i>
                                        </a>
                                    </div>
                                    <div className="btn-add-to-cart">
                                        <button className="btn-add">Agregar al carrito</button>
                                    </div>
                                </div> 
                            </div>
                             
                            <div className="product-text">
                                <h4>Bouquete Rosas Forever</h4>
                                <h5>S/ 75.00</h5>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        )
    }

}