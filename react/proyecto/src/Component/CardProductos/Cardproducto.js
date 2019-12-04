import React, { Component } from 'react';
import { baseUrl } from "./../../config";
import logo from "./../../logo.png"

export default class Cardproducto extends Component {

    render() {

        return (
            <div className="sectionProductos">
                <div className="container">
                    <div className="flex">
                        <div className="card">
                            <div>
                                <img src={baseUrl + "/bouquet-1.png"} /> 
                                <div className="text">
                                    <h4>Bouquete Rosas Forever</h4>
                                    <h5>s/. 75</h5>
                                </div>
                            </div>
                     
                        </div>
                        <div className="card">
                            <div>
                                <img src={baseUrl + "/bouquet-1.png"} /> 
                                <div className="text">
                                    <h4>Bouquete Rosas Forever</h4>
                                    <h5>s/. 75</h5>
                                </div>
                            </div>
                     
                        </div>
                        <div className="card">
                            <div>
                                <img src={baseUrl + "/bouquet-1.png"} /> 
                                <div className="text">
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