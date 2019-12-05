import React, { Component } from 'react';

export default class Promociones extends Component {
   productCard = (e) =>{
   //    $(this).addClass('animate');
   //     $('div.carouselNext, div.carouselPrev').addClass('visible');			
   //   }, function(){
   //     $(this).removeClass('animate');			
   //     $('div.carouselNext, div.carouselPrev').removeClass('visible');
  }
  
//   https://codepen.io/virgilpana/pen/RNYQwB/
   render() {
      return (
         <div>
            <h1>PROMOCIONES</h1>

            <div id="make-3D-space">
               <div onChange={this.productCard}>
                  <div id="product-front">
                     <div class="shadow"></div>
                     <img src="https://tinysurprise.com/media/catalog/product/cache/1/image/330x430/9df78eab33525d08d6e5fb8d27136e95/r/e/redrose_mixed_300x300.png" alt="" />
                     <div class="image_overlay"></div>
                     <div id="view_details">View details</div>
                     <div class="stats">
                        <div class="stats-container">
                           <span class="product_price">$50</span>
                           <span class="product_name">Bouquet de rosas "FOREVER"</span>

                           <div class="product-options">
                              <div class="colors">
                                 <div class="c-red"><span>Agregar al Carro</span></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            );
          }
        }
      