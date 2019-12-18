import React, { Component } from 'react';
import globoPincesa from './../carritoDeCompras/globoPincesa.png';
import vacaFlores from './../carritoDeCompras/vacaFlores.png';
import ositaBombon from './../carritoDeCompras/ositaBombon.png';
import { baseUrl } from "../../config";
import { NavLink } from "react-router-dom";

export default class carritoDeCompras extends Component {
   render() {
     return (
 <div> 
    <div className="container">
        <h1>HOLA</h1>
        <h2>hola</h2>
    
<table className="tabla">
 <tr>

    <td colSpan={5}> <h1 style={{textAlign:'left',letterSpacing:'5px',fontSize:'20px'}}> <b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CARRITO DE COMPRAS </b>  </h1></td>

  </tr>
  <br/>
  <tr>
      <td colSpan={5} style={{textAlign:'center', marginBottom: '4%',fontSize:'14px'}}><b style={{color:'red'}}>* <a href="#">Necesita ayuda?&nbsp;</a></b> <u>&nbsp; &nbsp;<a href=""><i class="icon-phone">+51 054-273884</i></a> &nbsp; &nbsp;<a href="#">Servicio al cliente</a> &nbsp; | &nbsp; <a href="#">Información de envío </a>&nbsp;| &nbsp;<a href="#">Política de devolución</a> </u></td>
  </tr>

     <br/>
     <br/>
     <br/>
     <br/>
  <tr>

    <td> <img src={{vacaFlores}} height='90px' width="90px"/> </td>
    

    <td>Arreglo de rosas con peluche</td>

    <td>S/. 89.90</td>
     <td style={{border:'1px solid black', width:'80px'}}>
         0</td>

    <td>S/. 89.90 </td>

  </tr>
<br/>
<br/>
  <tr>

    <td> <img src={{globoPincesa}} height='90px' width="90px"/></td>

    <td>Globos happy birthday princesa</td>

    <td>S/. 156.00</td>
    <td  style={{border:'1px solid black'}}>2</td>

    <td>S/. 156.00</td>

  </tr>
  <br/>
<br/>
  <tr>

    <td><img src={{ositaBombon}} height='90px' width="90px"/></td>

    <td>Bombones con osita love</td>

    <td>S/. 112.00</td>
     <td style={{border:'1px solid black'}}>1
         </td>

    <td>S/. 112.00</td>
  </tr>
  <br/>
<br/>
<br/>
  <tr>
    <td colSpan={2} style={{textAlign:'left', Left:'19px'}}> &nbsp; &nbsp; &nbsp;*Costo de envio mas impuestos calculados </td>
    <td  colSpan={3}>Total inc IGV &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; S/. 1305.00</td>
  </tr>
</table>
<br/>
<button id="button">
   <a href="">
     
     COMPRAR</a>
</button>
	</div>
    <br/>
<br/>
</div>

);
   }
}
 
