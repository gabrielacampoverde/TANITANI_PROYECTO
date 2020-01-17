import React, { useState, useEffect, Component } from 'react';
import { baseUrl } from "./../../config";
import axios from 'axios';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import { useForm } from 'react-hook-form'
import 'toastr/build/toastr.min.css'
import { URL_BACKEND } from "./../../environments/environments";


// REFERERENCIA: https://gist.github.com/gndx/b2be340d6697dd796dfd12659a5110c6

export default class Formulario extends Component {
   constructor(props) {
      super(props);
      // this.state = { feedback: '', name: 'Gabriela', email: 'gabriela.campoverde@gmail.com' };
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [cel, setCel] = useState('');
      const [ciu, setCiu] = useState('');
      const [men, setMen] = useState('');
      const { handleChange, handleSubmit, form, errors } = useForm();
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
   }

   // handleChange(event) {
   //    this.setState({ feedback: event.target.value })
   // }

   // handleSubmit() {
   //    const templateId = 'template_id';
   //    this.feedback(templateId, { message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email });
   // }

   // sendFeedback(templateId, variables) {
   //    window.emailjs.send('gmail', templateId, variables).then(res => {
   //       console.log('Correo enviando correctamente!')
   //    }).cath(err => console.error('Ocurrio un error'))
   // }

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
                     <span className="asterisco">* </span><label className="label1">Nombre y Apellido: </label>
                     <input className='form-control'
                        placeholder='Nombre y Apellido'
                        name="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        ref={form({
                           required: 'Este campo es requerido', // Error message when field is left empty.
                           pattern: { // Validation pattern
                              value: /^[a-z-A-Z\D]+$/i,
                              message: 'Nombre Inválido' // Error message when validation fails.
                           }
                        })}
                        aria-describedby="nameError"
                       />
                  </div>
                  <br />
                  <div className='form-group'>
                     <span className="asterisco">* </span><label className="label1">Email: </label>
                     <input type='email' className='form-control' id='email'
                        placeholder='Email' ref={email => this.inputEmail = email} />
                  </div>
                  <br />
                  <div className='form-group'>
                     <span className="asterisco">* </span><label className="label1">Telefono: </label>
                     <input type='number' className='form-control' id='phone'
                        placeholder='999 999 999' ref={phone => this.inputPhone = phone} />
                  </div>
                  <br />
                  <div className='form-group'>
                     <span className="asterisco">* </span><label className="label1">Ciudad: </label>
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
                     <span className="asterisco">* </span><label className="label1">Message: </label>
                     <br />
                     <textarea className='form-control' id='message'
                        rows='10' cols="40" ref={message => this.textAreaMessage = message}>
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

            <button type='submit' className="BotonFor" onClick={this.handleSubmit}>Contactanos</button>

            <div className="img-content">
               <img src={baseUrl + "/rose.jpg"} />
               <div className="bg-transparent"></div>
            </div>
         </main >

      );
   }
}
