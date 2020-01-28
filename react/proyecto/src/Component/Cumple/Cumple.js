import React, { Component } from 'react';
import { baseUrl } from "../../config";
import { URL_BACKEND } from '../../environments/environments';
import Cardproducto from '../CardProductos/Cardproducto'

export default class Cumple extends Component {
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
        <div className="banner-product">
          <h4>Cumpleaños</h4>
        </div>
        <div>
          <div className="sectionProductos">
            <div className="container">
              <Cardproducto productos={productos} num={4}></Cardproducto>
            </div>
          </div>
        </div>
      </main>

    )
  }
}
