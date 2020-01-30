import React from 'react';
import { useForm } from 'react-hook-form';

export default function Formulario() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

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
              type='text'
              placeholder='Nombre y Apellido'
              name='nombre'
              ref={register({ required: true, maxLength: 80 })} />
          </div>
          <br />
          <div className='form-group'>
            <span className="asterisco">* </span><label className="label1">Email: </label>
            <input type="text" placeholder="Email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          </div>
          <br />
          <div className='form-group'>
            <span className="asterisco">* </span><label className="label1">Telefono: </label>
            <input type="tel" placeholder="Numero de celular" name="telefono" ref={register({ required: true, minLength: 6, maxLength: 12 })} />
          </div>
          <br />
          <div className='form-group'>
            <span className="asterisco">* </span><label className="label1">Ciudad: </label>
            <select className='form-control' id='city' name="ciudad" ref={register({ required: true })}>
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
              rows='10' cols="40" ref={register({ required: true, maxLength: 20 })}>
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
        {/* <img src={baseUrl + "/rose.jpg"} /> */}
        <div className="bg-transparent"></div>
      </div>
    </main>
  );
}

