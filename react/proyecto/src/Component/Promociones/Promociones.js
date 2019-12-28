import React, { Component } from 'react';
import { baseUrl } from "./../../config";

export default class Promociones extends Component {
   render() {
      return (
         <main>
            <div className="banner-product">
               <h4>Promociones</h4>
            </div>
            <div className="sectionProductos">
               <div className="container">
                  <div className="product-list">
                     <div className="product-item card">
                        <div className="product-image">
                           <img src={baseUrl + "/otras_img/bouquet-2.png"} />
                           <div className="buttons-actions">
                              <div className="icons">
                                 <a href="#" className="item">
                                    <i className="icon-heart"></i>
                                 </a>
                                 <a href="#" className="item">
                                    <i className="icon-magnifier"></i>
                                 </a>
                                 <a href="#" className="item">
                                    <i className="icon-shopping-cart"></i>
                                 </a>
                              </div>
                              <div className="btn-add-to-cart">
                                 <button className="btn-add">Agregar al carrito</button>
                              </div>
                           </div>
                        </div>
                        <div className="product-text">
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
         </main>

      )
   }
}
