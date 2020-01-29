import React, { Component, Fragment } from 'react';
import { baseUrl } from "./../../config";
import { URL_BACKEND } from '../../environments/environments';
import logo from "./../../logo.png"
import { Link } from "react-router-dom";
const Cardproducto = (props) => {

    let llamarAlPadre = (e) => {
        props.funcion();
    }
    return (
            
                        <div className="product-list">
                            {
                                props.productos.map((producto, indice) => {
                                    console.log(producto.t_categoriaproductos.cat_id);
                                    
                                    return (
                                        <Fragment>
                                            {producto.t_categoriaproductos.map((m, indice) => {
                                                console.log(props.num);
                                                
                                                if (m.cat_id === props.num && indice <3) {
                                                    return (<div className="product-item card">
                                                        <div className="cont-card">
                                                            <div className="product-image">
                                                                <img src={producto.pro_img} />
                                                            </div>
                                                            <div className="product-text">
                                                                <h4>{producto.pro_nom}</h4>
                                                                <h5>S/. {producto.pro_prec}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="cont-btn">
                                                            <div className="buttons-actions">
                                                                <div className="icons">
                                                                    <a href="#" className="item">
                                                                        <i className="icon-heart"></i>
                                                                    </a>
                                                                    <Link className="item" to={{
                                                                        pathname:`/detalle:${producto.pro_id}`,
                                                                        proProps:{
                                                                            name: producto.pro_nom,
                                                                            img: producto.pro_img,
                                                                            precio: producto.pro_prec,
                                                                            det: producto.pro_det,
                                                                            categoria: m.cat_id
                                                                        } 
                                                                        }}><i className="icon-magnifier"></i></Link>
                                                                    <a href="#" className="item">
                                                                        <i className="icon-shopping-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>)
                                                }
                                            }
                                            )}
                                        </Fragment>
                                    )
                                })
                            }

                        </div>
    );
}
export default Cardproducto;