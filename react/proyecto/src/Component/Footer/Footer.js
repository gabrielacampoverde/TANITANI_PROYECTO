import React, { Component } from 'react';
import {baseUrl} from "./../../config";

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="cont-footer">
            <div className="flex-footer">
                <div className="item-footer">
                    <a href="">
                        <img src={baseUrl + "/logo.png"} />
                    </a>
                </div>
                <div className="item-footer">
                    <ul>
                        <li><a href="">CONTÁCTANOS</a></li>
                        <li><a href="">FORMAS DE PAGO</a></li>
                        <li><a href="">ORDEN DE PEDIDO</a></li>
                    </ul>
                </div>
                <div className="item-footer">
                    <h5>10% DE DESCUENTO EN TU PRIMER PEDIDO</h5>
                    <input type="email" name="email" id="email" placeholder="Correo Electrtónico"/>
                    <ul>
                        <li><a href=""><i className="icon-whatsapp"></i></a></li>
                        <li><a href=""><i className="icon-social-facebook"></i></a></li>
                        <li><a href=""><i className="icon-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="copy">
                <p>&copy; 2019 Tanitani | Todos los Derechos Reservados</p>
            </div>
        </div>
      </footer>
    );
  }
}
