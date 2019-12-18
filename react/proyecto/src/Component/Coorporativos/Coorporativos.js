import React, { Component } from 'react';
import { baseUrl } from "./../../config";

export default class Coorporativos extends Component {
   render() {
      return (
         <main>
            <div className="divCoor">
               <div className="ima">
                  <img src={baseUrl + "/coor1.jpg"} />
               </div>
               <div className="seccion bg">
                  <div className="titulo">
                     <h1 className="text">COORPORATIVOS</h1>
                  </div>
                  <div className="descri">
                     <div className="car">
                        <p>Florería Tanitani le ofrece el servicio de decorar los
                           diferentes ambientes de su empresa u oficina con arreglos
                           florales especialmente diseñados y a la medida de
                           sus necesidades para que su ambiente de trabajo sea más
                     acogedor.</p>
                        <br></br>
                        <p> Asimismo, le ofrecemos diferentes opciones de regalos
                           para que su empresa tenga una excelente relación tanto
                     con sus clientes como con sus empleados.</p>
                        <br></br>
                        <p>Ofrecemos también el servicio de decoración de sus
                           eventos, no dude en comunicarse con nosotros que lo
                           atenderemos gustosamente para que sus eventos sean
                     todo un éxito.</p>
                        <br></br>
                        <p>Para mayor información llamar al 080-56455588-555</p>
                        <button className="BotonCoor">Contactanos</button>
                     </div>

                  </div>
                  <div className="img-content">
                     <img src={baseUrl + "/rose.jpg"} />
                     <div className="bg-transparent"></div>
                  </div>
               </div>
            </div >
         </main>

      );
   }
}
