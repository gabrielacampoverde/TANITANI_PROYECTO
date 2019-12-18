import React, { Component } from "react";
import globoPincesa from './../Compra/globoPincesa.png';
import vacaFlores from './../Compra/vacaFlores.png';
import ositaBombon from './../Compra/ositaBombon.png';
import carritoDeCompras from './../carritoDeCompras/carritoDeCompras';
import {baseUrl} from "./../../config";
import { NavLink } from "react-router-dom";

export default class Compra extends Component {
  render() {
    return (
      <div> 
        <div>
        <table className="lista">
        <tr>
            <td><i className="fa fa-check-circle-o" aria-hidden="true" style={{fontSize:'50px'}}></i></td>
            <td><i className="fa fa-check-circle-o" aria-hidden="true" style={{fontSize:'50px'}}></i></td>
            <td><i className="fa fa-check-circle-o" aria-hidden="true" style={{fontSize:'50px'}}></i></td>
            <td><i className="fa fa-check-circle-o" aria-hidden="true" style={{fontSize:'50px'}}></i></td>
        </tr>
        <tr>
            <td>Información <br/> de envío</td>
            <td>Métodos <br/> de envío</td>
            <td>Formas <br/> de pago</td>
            <td>Visualiza <br/> tu orden</td>
        </tr>
    </table>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1><b><b>CHECK OUT</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Email | Atención al cliente | Información de envío | Política de retorno</b>
    </h1>
    <br/><br/><br/><br/>
    <table className="tabla1">
        <tr>
            <td><b>DATOS DEL EMISOR</b></td>
            <td><b>DATOS DEL RECEPTOR</b></td>
        </tr>
        <tr>
            <td> <br/> Calle Salaverry 410 <br/>Distrito: Cercado <br/>Ciudad:Arequipa <br/>Pais:Perú</td>
            <td><br/>Avenida Alcanfores 924-B <br/>Distrito: Cerro Colorado <br/>Ciudad:Arequipa <br/>Pais:Perú</td>
        </tr>
        <tr>
            <td> <br/> <button style={{borderRadius: '5px', border: '1px solid rgb(226, 32, 32)',height: '90%' ,color: 'white',alignSelf: 'center',backgroundColor: 'rgb(235, 41, 41)'}}>MODIFICAR</button></td>
            <td>  <br/>  <button style={{borderRadius: '5px', border: '1px solid rgb(233, 37, 37)',height: '90%',color: 'white',alignSelf: 'center',backgroundColor: 'rgb(228, 39, 39)'}}>MODIFICAR</button></td>
        </tr>
    </table>


    <div className="listaForms">
        <ul>
            <li>
                <span>*</span> Nombres y Apellidos:<br/> <br/>
                <input type="text" name=" " value=" "/>
                <br/><br/> <span>*</span> Dirección:<br/><br/>
                <input type="text" name="lastname" value=""/>
                <br/><br/> <span>*</span> Ciudad:<br/> <br/>
                <input type="text" name="firstname" value=""/>
                <br/><br/> <span>*</span> Código Postal:<br/> <br/>
                <input type="text" name="lastname" value=""/>
                <br/><br/> <span>*</span> Teléfono:<br/> <br/>
                <input type="text" name="firstname" value=""/>
                <br/><br/>


            </li>
            <li>
                <span>*</span> Nombres y Apellidos:<br/> <br/>
                <input type="text" name=" " value=" "/>
                <br/><br/> <span>*</span> Dirección:<br/><br/>
                <input type="text" name="lastname" value=""/>
                <br/><br/> <span>*</span> Ciudad:<br/> <br/>
                <input type="text" name="firstname" value=""/>
                <br/><br/> <span>*</span> Código Postal:<br/> <br/>
                <input type="text" name="lastname" value=""/>
                <br/><br/> <span>*</span> Teléfono:<br/> <br/>
                <input type="text" name="firstname" value=""/>
                <br/><br/>

            </li>
        </ul>
        <br/>

    </div>
    <br/>
    <hr width={870}/>
    <br/>
    <br/>
    <h2 style={{marginLeft: '18.8%'}}>MÉTODO DE ENVÍO</h2>
    <br/>
    <br/>
    
    <table className="tabla2">
        <tr>
            <td>
                <b>Envío gratutio</b>

            </td>
            <td>
                <b>Servicio postal OLVA COURIER</b>

            </td>
            
        </tr>
        <tr>
           <td><br/><input type="checkbox" class="cbox1" value=""/>&nbsp;&nbsp;Envío GRATIS <br/>&nbsp; </td>
            <td><br/><input type="checkbox" class="cbox1" value=""/>&nbsp;&nbsp;Terrestre S/.15 <br/> (ENTREGA: Máx. 3 días)</td>
            <td><br/><input type="checkbox" class="cbox1" value=""/>&nbsp;&nbsp;Aérea ECONO S./ 25 <br/> (ENTREGA: Máx 2 días )</td>
            <td><br/><input type="checkbox" class="cbox1" value=""/>&nbsp;&nbsp;Aérea EXPRESS S/. 45 <br/> (ENTREGA: El día siguiente)</td>
            

        </tr>
    </table>
    <br/>
    <br/>
    <hr width={870}/>
    <br/>
    <table className="tabla3">
        <tr>
            <td colspan="2"> <b>INFORMACIÓN DE PAGO</b></td>
        </tr>
        <br/>
        <br/>
        <tr>
            <td>Tarjeta de crédito</td> 
            <td>PAYPAL&nbsp;¿Qué es PAYPAL?</td>
        </tr>
         <br/>
          
        <tr>
            <td> <span className="asterisco">*</span> Número de tarjeta</td>
            <td><input type="text" style={{border: 'none',borderBottom: '1px solid black',color: 'black',fontSize: '13px'}}/></td>
        </tr>
        <tr>
            <td><span className="asterisco">*</span> Fecha de expiración</td>
            <td><input type="text" style={{border: 'none',borderBottom: '1px solid black',color: 'black',fontSize: '13px'}}/></td>
        </tr>
        <tr>
            <td><span className="asterisco">*</span> Código de tarjeta</td>
            <td><input type="text" style={{border: 'none',borderBottom: '1px solid black',color: 'black',fontSize: '13px'}}/></td>
        </tr>
    </table>
    <br/>
    <br/>
    <button id="botonValidar">VALIDAR</button>
    <br/>
    <br/>
    <br/>
    <hr width={870}/>
    <br/>
    <br/>
    <table className="tabla4">
        <tr style={{textAlign: 'center', fontSize: '11px'}}>
            <td style={{textAlign: 'center'}}><b>&nbsp;&nbsp;&nbsp;ITEM</b></td>
            <td><b>DESCRIPCIÓN</b></td>
            <td><b>MODELO</b></td>
            <td><b>TAMAÑO</b></td>
            <td><b> PRECIO UNIT. </b></td>
            <td><b>CANTIDAD</b></td>
            <td><b> PRECIO TOTAL.</b></td>
        </tr>
        <tr>
            <td><img src={baseUrl + "/vacaFlores"} height='90px' width="90px" id="img2"/></td>
            <td> <br/> Arreglo de rosas <br/> con peluche </td>
            <td> <br/> Rosas rojas con <br/> peluche vaquita</td>
            <td>M</td>
            <td style={{textAlign: 'center'}}>S/.89.90</td>
            <td style={{textAlign: 'center'}}>0</td>
            <td style={{textAlign: 'center'}}>S/.89.90</td>
        </tr>
        <tr>
            <td><img src={baseUrl + "/globoPincesa"} height='90px' width="90px" id="img2"/></td>
            <td> <br/> Globo Happy Birthday <br/> Princesa </td>
            <td> <br/> Globo corazon más<br/> peluche princesa</td>
            <td>L</td>
        <td style={{textAlign: 'center'}}>S/.156.00</td>
        <td style={{textAlign: 'center'}}>2</td>
        <td style={{textAlign: 'center'}}>S/.156.00</td>
        </tr>
        <tr>
            <td><img src={baseUrl + "ositaBombon"} height='90px' width="90px" id="img3"/></td>
            <td><br/> Bombones con <br/> Osita love </td>
            <td> <br/> Bombones chocolate con <br/> almendras y osa </td>
            <td>M</td>
            <td style={{textAlign: 'center'}}>S/.112.00</td>
            <td style={{textAlign: 'center'}}>1</td>
            <td style={{textAlign: 'center'}}>S/.112.00</td>
        </tr>
        <tr>

            <td colspan="6" style={{ textAlign:'right',fontSize: '20px' }}><b> <br/> <br/> TOTAL</b>&nbsp;&nbsp;&nbsp;</td>
            <td style={{textAlign: 'center',fontSize: '20px'}}><b> <br/> <br/> S/.268.00</b></td>
        </tr>

    </table>
    <br/>
    <br/>
    <button id="botonValidar1">ORDENAR</button>
    <br/> </div>
        
         </div>
    );
  }
}

