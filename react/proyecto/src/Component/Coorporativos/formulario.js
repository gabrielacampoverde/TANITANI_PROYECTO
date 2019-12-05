import React, { Component } from 'react';
// import '../Coorporativos/estilos.css'; 

export default class FormularioCoorporativo extends Component {
   render() {
      return (
         <div className="container-contact100">
            <div className="wrap-contact100">
               <form className="contact100-form validate-form">
                  <span className="contact100-form-title">Contactanos</span>
                  <br></br>
                  <label className="label-input100" for="first-name">Nombre Completo</label>
                  <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
                     <input id="first-name" className="input100" type="text" name="first-name" />
                     <span className="focus-input100"></span>
                  </div>
                  <label className="label-input100" for="email">E-mail</label>
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                     <input id="email" className="input100" type="text" name="email" />
                     <span className="focus-input100"></span>
                  </div>
                  <label className="label-input100" for="phone">Número Telefonico</label>
                  <div className="wrap-input100">
                     <input id="phone" className="input100" type="text" name="phone" />
                     <span className="focus-input100"></span>
                  </div>
                  <label className="label-input100" for="phone">Ciudad</label>
                  <div className="wrap-input100">
                     <input id="phone" className="input100" type="text" name="phone" />
                     <span className="focus-input100"></span>
                  </div>

                  <label className="label-input100" for="message">Mensaje</label>
                  <div className="wrap-input100 validate-input" data-validate="Message is required">
                     <textarea id="message" className="input100" name="message"></textarea>
                     <span className="focus-input100"></span>
                  </div>

                  <div className="container-contact100-form-btn">
                     <button className="BotonCoor">Enviar</button>
                  </div>
               </form>

               <div className="contact100-more flex-col-c-m">
                  <div className="flex-w size1 p-b-47">
                     <div className="txt1 p-r-25">
                        <span className="lnr lnr-map-marker"></span>
                     </div>

                     <div className="flex-col size2">
                        <span className="txt1 p-b-20">Direccion: </span>
                        <span className="txt2">Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US</span>
                     </div>

                     <div className="dis-flex size1 p-b-47">
                        <div className="txt1 p-r-25">
                           <span className="lnr lnr-phone-handset"></span>
                        </div>

                        <div className="flex-col size2">
                           <span className="txt1 p-b-20">Telefono:  </span>
                           <span className="txt3"> +1 800 1236879</span>
                        </div>
                     </div>

                     <div className="dis-flex size1 p-b-47">
                        <div className="txt1 p-r-25">
                           <span className="lnr lnr-envelope"></span>
                        </div>

                        <div className="flex-col size2">
                           <span className="txt1 p-b-20">E-mail:</span>
                           <span className="txt3">contact@example.com</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
