import React, { Component, Fragment } from 'react';
import { baseUrl } from "./../../config";
import NumericInput from 'react-numeric-input';
import logo from "./../../logo.png"
import ProductosRelacionados from '../ProductosRelacionados/ProductosRelacionados';
import Cardproducto from '../CardProductos/Cardproducto';
import { URL_BACKEND } from '../../environments/environments';
import { Link } from "react-router-dom";
export default class Detalle extends Component {
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
            <Fragment>
                <main>
                    <div className="container">
                        <div className="detail-product">
                            <div className="media">
                                <div className="product-image img-hover">
                                    <img src={this.props.location.proProps.img} />

                                </div>
                            </div>
                            <div className="caption">
                                <div>
                                    <h1>{this.props.location.proProps.name}</h1>
                                    <h2>S/. {this.props.location.proProps.precio}</h2>
                                    <p>{this.props.location.proProps.det}</p>
                                    <div className="colores">
                                        <h3>Color</h3>
                                        <ul class="colors">
                                            <li class="c-red">
                                                <div class="checkbox-field">
                                                    <input type="radio" name="colors" value="color1" id="color1" />
                                                    <label class="checkbox-mask-container" for="color1">
                                                        <span class="checkbox-box"></span>
                                                        <span class="checked"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li class="c-orange">
                                                <div class="checkbox-field">
                                                    <input type="radio" name="colors" value="color2" id="color2" />
                                                    <label class="checkbox-mask-container" for="color2">
                                                        <span class="checkbox-box"></span>
                                                        <span class="checked"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li class="c-purple">
                                                <div class="checkbox-field">
                                                    <input type="radio" name="colors" value="color3" id="color3" />
                                                    <label class="checkbox-mask-container" for="color3">
                                                        <span class="checkbox-box"></span>
                                                        <span class="checked"></span>
                                                    </label>
                                                </div>

                                            </li>
                                            <li class="c-yellow">
                                                <div class="checkbox-field">
                                                    <input type="radio" name="colors" value="color4" id="color4" />
                                                    <label class="checkbox-mask-container" for="color4">
                                                        <span class="checkbox-box"></span>
                                                        <span class="checked"></span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="quantity">
                                        <NumericInput className="contador" min={0} max={100} value={50} />

                                    </div>
                                    <div className="cont-btn">
                                        <Link id="button-detalle" to={{pathname:`/carritoDeCompras`}}>
                                            Añadir al carrito
                                        </Link>
                                        <div className="icons">
                                            <a href="#" className="item">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="sectionProductos">
                        <div className="container">
                            <div className="titlecard">
                                <h1>DESTACADOS</h1>
                            </div>
                            <Cardproducto productos={productos} num={this.props.location.proProps.categoria}></Cardproducto>
                        </div></div>
                </main>
            </Fragment>

        )


    }
}