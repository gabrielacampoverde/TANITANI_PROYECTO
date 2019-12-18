import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
import { URL_BACKEND } from "./../../environments/environments";

const Registro = () => {

    const [name, setName] = useState('');
    const [apell, setApell] = useState('');
    const [dir, setDir] = useState('');
    const [cel, setCel] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [contador, setContador] = useState(0)


    useEffect(() => {
        console.log(contador);

    }, [contador]);

    const nuevoUsuario = (event) => {
        event.preventDefault();
        let misHeaders = {
            "Content-Type": "application/json"
        }
        let contenido = {
            persona: {
                per_nom: name,
                per_ape: apell,
                per_dir: dir,
                per_cel: cel,
            },
            usuario: {
                usu_email: email,
                usu_pass: pass
            }

        }
        axios.post(`${URL_BACKEND}/api/usuario`, contenido, {
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
    }
    const limpiarCampos = () => {
        setName('');
        setApell('');
        setEmail('');
        setPass('');
        toastr.options = {
            positionClass: 'toast-bottom-full-width',
            hideDuration: 300,
            preventDuplicates: true
        }
        toastr.clear()
        setTimeout(() => toastr.warning(`No deje espacios en blanco`), 500)
    }

    return ( <main>
        <div className = "sectionRegister" >
        <div className = "contRegister" >
        <div className = "container" >
        <form onSubmit = { nuevoUsuario } >
        <div className = "group" >
        <label > Nombres </label> <
        input className = "input"
        type = "text"
        value = { name }
        onChange = {
            (event) => setName(event.target.value) }
        /> </div> 
        <div className = "group" >
        <label > Apellido </label> 
        <input className = "input"
        type = "text"
        value = { apell }
        onChange = {
            (event) => setApell(event.target.value) }
        /> </div> <div className = "group" >

        <label > Direccion </label> <input className = "input"
        type = "text"
        value = { dir }
        onChange = {
            (event) => setDir(event.target.value) }
        /> </div> <div className = "group" >
        <label > Celular </label> <input className = "input"
        type = "text"
        value = { cel }
        onChange = {
            (event) => setCel(event.target.value) }
        /> </div> <div className = "group" >
        <label > Email </label> <input className = "input"
        type = "text"
        value = { email }
        onChange = {
            (event) => setEmail(event.target.value) }
        /> </div>
         <div className = "group" >
        < label > Contraseña </label> <input className = "input"
        type = "text"
        value = { pass }
        onChange = {
            (event) => setPass(event.target.value) }
        /> </div> <div className = "group" >
        <
        button className = "btn btn-primary button"
        onClick = {
            () => {
                let c = contador;
                c++;
                setContador(c);
            }
        }
        style = {{ color: '#B5141C' } } > Crear Usuario </button>
      <br/>
        <hr/>
        <a for = "tab-1" id = "last1" > Ya es miembro ? </a>
        </div>   
        </form> </div> </div> </div>
        </main>

    )
}

export default Registro;