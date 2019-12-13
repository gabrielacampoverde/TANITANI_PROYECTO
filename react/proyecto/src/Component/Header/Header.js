import React, { Component } from 'react';
import logo from "./../../logo.png"
import { NavLink } from "react-router-dom";


export default class Header extends Component {
    listenScrollEvent = e => {
        let header = document.getElementById("header")
        if (window.scrollY > 80) {

            console.log(header);
            header.classList.add("change-header");

        } else {
            header.classList.remove("change-header");
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <header id="header">
                <div className="cont-header">
                    <div className="box-oferta">
                        <div className="container-box">
                            <h5>DELIVERY GRATIS POR COMPRAS MAYORES A  S/. 100</h5>
                        </div>
                    </div>
                    <div className="container-h">
                        <div className="cont-header-top">
                            <div className="search">
                                <div className="input-search">
                                    <input type="search" name="search" id="search" placeholder="Search" />
                                </div>
                            </div>
                            <div className="logo">
                                <a href=""><img src={logo} /></a>
                            </div>
                            <div className="icons">
                                <div className="cont-icons">
                                    <ul>
                                        <li>
                                            <NavLink className="nav-link" to={"/loginYregistro"}><i className="icon-user"></i></NavLink>
                                            {/* <a href="">
                                              
                                            </a> */}
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="icon-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i className="icon-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    <h6 className="text-color help">Necesita ayuda? 888-308-2636</h6>
                                </div>
                            </div>
                        </div>
                        <div className="cont-nav">
                            <nav>
                                <ul>
                                    <li><a href="">HOME</a></li>
                                    <li className="has-submenu"><a href="">PROMOCIONES</a>
                                        <ul className="submenu">
                                            <li><a href="">Promocion 1</a></li>
                                            <li><a href="">Promocion 2</a></li>
                                            <li><a href="">Promocion 3</a></li>
                                            <li><a href="">Promocion 4</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">OCASIONES</a></li>
                                    <li><a href="">ESPECIALES</a></li>
                                    <li>
                                        <NavLink className="nav-link" to={"/coorporativos"}>coorporativos</NavLink>
                                    </li>
                                    <li><a href="">COMPLEMENTOS</a></li>
                                    <li><a href="">CONTÁCTANOS</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}