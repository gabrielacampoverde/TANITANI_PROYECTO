import React, { Component } from 'react';
import { baseUrl } from "../../config";
import compra from './../Compra/compra';
import { NavLink, Link } from "react-router-dom";

export default class carritoDeCompras extends Component {
  render() {
    return (
      <main>
        {/* <div>
          <div className="container">

            <table className="tabla">
              <tr>

                <td colSpan={5}> <h1 style={{ textAlign: 'left', letterSpacing: '5px', fontSize: '22px' }}> <b> &nbsp; &nbsp; &nbsp; &nbsp; CARRITO DE COMPRAS </b>  </h1></td>

              </tr>
              <br />
              <br />
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', marginBottom: '4%', fontSize: '14px' }}><b style={{ color: 'red' }}>* <a href="#">Necesita ayuda?&nbsp;</a></b> &nbsp; &nbsp;<a href=""><i class="icon-phone">+51 054-273884</i></a> &nbsp; &nbsp;<u><a href="#">Servicio al cliente</a> &nbsp; | &nbsp; <a href="#">Información de envío </a>&nbsp;| &nbsp;<a href="#">Política de devolución</a> </u></td>
              </tr>

              <br />
              <br />
              <br />
              <br />
              <tr>

                <td> <img src={this.props.location.proProps.img} height='140px' width="140px" /> </td>


                <td>{this.props.location.proProps.name}</td>

                <td>S/. {this.props.location.proProps.precio}</td>
                <td >
                  1</td>

                <td>S/. {this.props.location.proProps.precio} </td>

              </tr>
              <br />
              <br />
              <tr>

                <td> <img src={baseUrl + "/compra-img/globoPincesa.png"} height='140px' width="140px" /></td>

                <td>Globos happy birthday princesa</td>

                <td>S/. 156.00</td>
                <td >2</td>

                <td>S/. 156.00</td>

              </tr>
              <br />
              <br />
              <tr>

                <td><img src={baseUrl + "/compra-img/ositaBombon.png"} height='140px' width="140px" /></td>

                <td>Bombones con osita love</td>

                <td>S/. 112.00</td>
                <td>1
         </td>

                <td>S/. 112.00</td>
              </tr>
              <br />
              <br />
              <br />
              <tr>
                <td colSpan={2} style={{ textAlign: 'left', Left: '19px' }}> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*Costo de envio mas impuestos calculados </td>
                <td colSpan={3}>Total inc IGV &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; S/. 278.00</td>
              </tr>
            </table>
            <br />
            <button id="button">
              <Link href="compra" to={{
                pathname: `/compra`, proProps: {
                  name: this.props.location.proProps.name,
                  img: this.props.location.proProps.img,
                  precio: this.props.location.proProps.precio,
                  det: this.props.location.proProps.det,
                  categoria: this.props.location.proProps.categoria
                }
              }}>
                COMPRAR</Link>
            </button>
          </div>
          <br />
          <br />
        </div> */}
      </main>
    );
  }
}
