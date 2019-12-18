import React, { Component } from 'react';
import { baseUrl } from "./../../config";

export default class Promociones extends Component {
   render() {
      return (
         <div className="sectionPromo">
             <div className="containerPromo">
                 <div className="flexPromo">
                     <div className="cardPromo">
                         <div>
                             <img src={baseUrl + "/bouquet-1.png"} /> 
                             <div className="textpromo">
                                 <h4>Bouquete Rosas Forever</h4>
                                 <div className="contenedorPromo">
                                    <div className="h5Promo"><h5 className="h51">s/ 75</h5></div>
                                    <div className="h5Promo1"><h5 className="h52">-25%</h5></div>
                                    <div className="h5Promo"><h5 className="h53">s/ 50</h5></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     )
   }
}
