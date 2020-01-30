import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { baseUrl } from "./../../config";
import axios from 'axios';
import { URL_BACKEND } from "./../../environments/environments";
import 'toastr/build/toastr.min.css'
import Swal from 'sweetalert2';
import toastr from 'toastr';

export default function Formulario() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);
  console.log(errors);
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mensaje, setMensaje] = useState('');
  let contenido = {
    persona: {
        nombre,
        email,
        telefono,
        ciudad,
        mensaje,
    },
  }

  let misHeaders = {
    "Content-Type": "application/json"
  }

  axios.post(`${URL_BACKEND}/correo`, contenido, {
    headers: misHeaders
  }).then(rpta => {
    console.log(rpta.status);
    if (rpta.status === 201) {

      Swal.fire(
        "Usuario Creado",
        "Operación Exitosa",
        "success"
      )
    } else {
      console.log("error al crear");

    }
    limpiarCampos();
  })

  const limpiarCampos = () => {
    setNombre('');
    setEmail('');
    setTelefono('');
    setCiudad('');
    setMensaje('');
    toastr.options = {
      positionClass: 'toast-bottom-full-width',
      hideDuration: 300,
      preventDuplicates: true
    }
    toastr.clear()
    setTimeout(() => toastr.warning(`No deje espacios en blanco`), 500)
  }

  return (
    <main className="bg">
      <div className="containerFor">
        <div className="subContainer1">
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
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span className="asterisco">* </span><label className="label1">Nombre y Apellido: </label>
            <input className='form-control'
              value={nombre}
              type='text'
              placeholder='Nombre y Apellido'
              name='nombre'
              onChange={(event) => setNombre(event.target.value)}
              ref={register({ required: true, maxLength: 80 })} />
          </div>
          <br />
          <div className='form-group'>
            <span className="asterisco">* </span><label className="label1">Email: </label>
            <input type="text" placeholder="Email" name="email" 
                  value={email}
                  ref={register({ required: true, maxLength: 80 })}
                  onChange={(event) => setEmail(event.target.value)}/>
          </div>
          <br />
          <div className='form-group'>
            <span className="asterisco">* </span><label className="label1">Telefono: </label>
            <input type="tel" placeholder="Numero de celular" name="telefono" 
                    value={telefono}
                    ref={register({ required: true, minLength: 6, maxLength: 12 })}
                    onChange={(event) => setTelefono(event.target.value)} />
          </div>
          <br />
          <div className='form-group'>
            <span className="asterisco">* </span><label className="label1">Ciudad: </label>
            <select className='form-control' id='city' name="ciudad" 
                    value={ciudad}
                    onChange={(event) => setCiudad(event.target.value)}
                    ref={register({ required: true })}>
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
            <textarea className='form-control' id='message' name="mensaje"
              rows='10' cols="40"
              value={mensaje} 
              onChange={(event) => setMensaje(event.target.value)}
              ref={register({ required: true, maxLength: 20 })}>
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

          <input type="submit" className="BotonFor" />
        </form>
      </div>

      <div className="img-content">
        <img src={baseUrl + "/background.jpg"} />
        <div className="bg-transparent"></div>
      </div>
    </main>
  );
}

