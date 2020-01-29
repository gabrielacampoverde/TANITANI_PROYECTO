// import React, { useState, useEffect, Component } from 'react';
// import { baseUrl } from "./../../config";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import toastr from 'toastr';
// import { useForm } from 'react-hook-form'
// import 'toastr/build/toastr.min.css'
// import { URL_BACKEND } from "./../../environments/environments";


// // REFERERENCIA: https://gist.github.com/gndx/b2be340d6697dd796dfd12659a5110c6

// const Formulario = () => {
//    const [name, setName] = useState('');
//    const { handleSubmit, register, errors } = useForm();
//    const onSubmit = values => {
//       console.log(values);
//       console.log(name);
     

//   };
//       return (
//          <main className="bg">
//             <div className="containerFor">
//                <div cassName="subContainer1">
//                   <label className="label1">Atencion al cliente por Email</label>
//                   <br /><br />
//                   <label>Lunes a Sabado: 10:00 am a 6:00 pm </label>
//                   <br /><br />
//                   <label>Telefonos: 999-999-99 </label>
//                   <br /><br />
//                   <label className="label1">Atencion al cliente en tienda</label>
//                   <br /><br />
//                   <label>Direccion:</label>
//                   <br />
//                   <label>Avenida Los Rosales #456 Cayma</label>
//                   <br /><br />
//                   <label>Telefonos:</label>
//                   <br />
//                   <label>999-999-99</label>
//                   <br /><br />
//                   <label>Horario:</label>
//                   <br />
//                   <label>Lunes a Viernes: 10:00 am a 6:00 pm </label>
//                   <br />
//                   <label>Sabado y Domingo: 10:00 am a 1:00 pm </label>
//                </div>

//                <form ref='contactForm' className="subContainer2" onSubmit={handleSubmit(onSubmit)} >
//                   <div>
//                      <span className="asterisco">* </span><label className="label1">Nombre y Apellido: </label>
//                      <input className='form-control'
//                         placeholder='Nombre y Apellido'
//                         name="name"
//                                             type="text"
//                                             value={name}
//                                             onChange={(event) => setName(event.target.value)}
//                                             ref={register({
//                                                 required: 'Este campo es requerido', // Error message when field is left empty.
//                                                 pattern: { // Validation pattern
//                                                     value: /^[a-z-A-Z\D]+$/i,
//                                                     message: 'Nombre Inválido' // Error message when validation fails.
//                                                 }
//                                             })}
//                                             aria-describedby="nameError"
//                                         />
//                                         {errors.name ? (
//                                             <div className="text-error" id="nameError">{errors.name.message}</div>
//                                         ) : (
//                                                 ''
//                                             )}
//                   </div>
//                   <br />
//                   <div className='form-group'>
//                      <span className="asterisco">* </span><label className="label1">Email: </label>
//                      <input type='email' className='form-control' id='email'
//                         placeholder='Email'/>
//                   </div>
//                   <br />
//                   <div className='form-group'>
//                      <span className="asterisco">* </span><label className="label1">Telefono: </label>
//                      <input type='number' className='form-control' id='phone'
//                         placeholder='999 999 999' />
//                   </div>
//                   <br />
//                   <div className='form-group'>
//                      <span className="asterisco">* </span><label className="label1">Ciudad: </label>
//                      <select className='form-control' id='city'>
//                         <option value='Arequipa'>Arequipa</option>
//                         <option value='Lima'>Lima</option>
//                         <option value='Cusco'>Cusco</option>
//                         <option value='Puno'>Puno</option>
//                         <option value='Tacna'>Tacna</option>
//                      </select>
//                   </div>
//                   <br />
//                   <div className='form-group'>
//                      <span className="asterisco">* </span><label className="label1">Message: </label>
//                      <br />
//                      <textarea className='form-control' id='message'
//                         rows='10' cols="40" ref={message => this.textAreaMessage = message}>
//                      </textarea>
//                   </div>
//                   <br />
//                   <div>
//                      <label className="label1">Contactarme por:
//                      <br></br>
//                         <input className="check" type="checkbox"></input><label>Telefono</label>
//                         <input className="check" type="checkbox"></input><label>Email</label>
//                      </label>
//                   </div>
//                </form>
//             </div>

//             <button type='submit' className="BotonFor">Contactanos</button>

//             <div className="img-content">
//                <img src={baseUrl + "/rose.jpg"} />
//                <div className="bg-transparent"></div>
//             </div>
//          </main >

//       );

// }
// export default Formulario;