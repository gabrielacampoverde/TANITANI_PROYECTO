import React, { Component, Fragment } from 'react';
import { baseUrl } from "./../../config";
import NumericInput from 'react-numeric-input';
import logo from "./../../logo.png"
import ProductosRelacionados from '../ProductosRelacionados/ProductosRelacionados';
import Cardproducto from '../CardProductos/Cardproducto'
import { URL_BACKEND } from '../../environments/environments';
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
                                    <h2>{this.props.location.proProps.precio}</h2>
                                    <p>{this.props.location.proProps.det}</p>
                                    <div className="colores">
                                        <h3>Color</h3>
                                        <input type="radio" name="color" value="male" /> rojo
                                    <input type="radio" name="color" value="female" /> amarillo
                                    <input type="radio" name="color" value="other" /> verde
                                </div>

                                <div className="quantity">
                                    <NumericInput className="contador" min={0} max={100} value={50} />

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