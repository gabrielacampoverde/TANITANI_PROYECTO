import React, { Component } from 'react';
import { baseUrl } from "./../../config";

// REFERERENCIA: https://gist.github.com/gndx/b2be340d6697dd796dfd12659a5110c6

export default class Formulario extends Component {
   render() {
      return (
         <main className="bg">
            <div className="containerFor">
               <form className="subContainer1">
                  <label className="label1">Atencion al cliente por Email</label>
                  <br /><br />
                  <label>Lunes a Sabado: 10:00 am a 6:00 pm </label>
                  <br /><br />
                  <label>Telefonos: 999-999-99 </label>
                  <br /><br />
                  <label className="label1">Atencion al cliente en tienda</label>
                  <br /><br />
                  <label>Direccion:</label>
                  <br />
                  <label>Avenida Los Rosales #456 Cayma</label>
                  <br /><br />
                  <label>Telefonos:</label>
                  <br />
                  <label>999-999-99</label>
                  <br /><br />
                  <label>Horario:</label>
                  <br />
                  <label>Lunes a Viernes: 10:00 am a 6:00 pm </label>
                  <br />
                  <label>Sabado y Domingo: 10:00 am a 1:00 pm </label>
               </form>

               <form ref='contactForm' form className="subContainer2" >
                  <div>
                     <label className="label1">Nombre y Apellido: </label>
                     <input type='text' className='form-control' id='name'
                        placeholder='Nombre y Apellido' ref={name => this.inputName = name} />
                  </div>
                  <br />
                  <div className='form-group'>
                     <label className="label1">Email: </label>
                     <input type='email' className='form-control' id='email'
                        placeholder='Email' ref={email => this.inputEmail = email} />
                  </div>
                  <br />
                  <div className='form-group'>
                     <label className="label1">Telefono: </label>
                     <input type='number' className='form-control' id='phone'
                        placeholder='999 999 999' ref={phone => this.inputPhone = phone} />
                  </div>
                  <br />
                  <div className='form-group'>
                     <label className="label1">Ciudad: </label>
                     <select className='form-control' id='city' ref={city => this.inputCity = city}>
                        <option value='Arequipa'>Arequipa</option>
                        <option value='Lima'>Lima</option>
                        <option value='Cusco'>Cusco</option>
                        <option value='Puno'>Puno</option>
                        <option value='Tacna'>Tacna</option>
                     </select>
                  </div>
                  <br />
                  <div className='form-group'>
                     <label className="label1">Message: </label>
                     <br />
                     <textarea className='form-control' id='message'
                        rows='10' cols="50" ref={message => this.textAreaMessage = message}>
                     </textarea>
                  </div>
                  <br />
                  <div>
                     <label className="label1">Contactarme por:
                     <br></br>
                        <input className="check" type="checkbox"></input><label>Telefono</label>
                        <input className="check" type="checkbox"></input><label>Email</label>
                     </label>
                  </div>
               </form>
            </div>
            
            <button type='submit' className="BotonFor">Contactanos</button>
            
            <div className="img-content">
               <img src={baseUrl + "/rose.jpg"} />
               <div className="bg-transparent"></div>
            </div>
         </main >
      );
   }
}
