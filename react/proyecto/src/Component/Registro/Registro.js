import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import { useForm } from 'react-hook-form'
import 'toastr/build/toastr.min.css'
import { URL_BACKEND } from "./../../environments/environments";

const Registro = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [apell, setApell] = useState('');
    const [dir, setDir] = useState('');
    const [cel, setCel] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        console.log(email, pass, name, apell, dir, cel);
        let misHeaders = {
            "Content-Type": "application/json"
        }
        let contenido = {
            persona: {
                per_nom: name,
                per_ape: apell,
                per_dir: dir,
                per_cel: cel,
                per_est: '1',
            },
            usuario: {
                usu_email: email,
                "usu_tipo": "2",
                usu_pass: pass
            }

        }
        axios.post(`${URL_BACKEND}/api/usuario/crear`, contenido, {
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
            setName('');
            setApell('');
            setEmail('');
            setPass('');
            setDir('');
            setCel('');
            toastr.options = {
                positionClass: 'toast-bottom-full-width',
                hideDuration: 300,
                preventDuplicates: true
            }
            toastr.clear()
            setTimeout(() => toastr.warning(`No deje espacios en blanco`), 500)
        }

    };

    return (

        <main>
            <div className="sectionRegister">
                <div className="contRegister">
                    <div className="container-registro">
                        <div className="title-section">
                            <h2>CREAR UNA CUENTA</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="datos-acceso">
                                <div className="subtitulo">
                                    <h3>DATOS DE ACCESO</h3>
                                    <div className="linea"></div>
                                </div>
                                <div className="group-fill">
                                    <div className="fill-input">
                                        <label>Email *</label>
                                        <input
                                            name="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                                pattern: { // Validation pattern
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                    message: 'Email inválido' // Error message when validation fails.
                                                }
                                            })}
                                        />
                                        {errors.email ? (
                                            //
                                            <div className="text-error" id="emailError">{errors.email.message}</div>
                                        ) : (
                                                ''
                                            )}
                                    </div>
                                    <div className="fill-input">
                                        <label>Contraseña *</label>
                                        <input
                                            className="input"
                                            name="password"
                                            type="password"
                                            value={pass}
                                            onChange={(event) => setPass(event.target.value)}
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                                pattern: { // Validation pattern
                                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/i,
                                                    message: 'Contraseña inválida. Mínimo ocho caracteres, al menos una letra y un número' // Error message when validation fails.
                                                }
                                            })}
                                            aria-describedby="passwordError"
                                        />
                                        {errors.password ? (
                                            <div className="text-error" id="passwordError">{errors.password.message}</div>
                                        ) : (
                                                ''
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="datos-peronales">
                                <div className="subtitulo">
                                    <h3>DATOS PERSONALES</h3>
                                    <div className="linea"></div>
                                </div>
                                <div className="group-fill">
                                    <div className="fill-input">
                                        <label>Nombres *</label>
                                        <input
                                            className="input"
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                                pattern: { // Validation pattern
                                                    value: /^[a-z-A-Z\D]+$/i,
                                                    message: 'Nombre Inválido' // Error message when validation fails.
                                                }
                                            })}
                                            aria-describedby="nameError"
                                        />
                                        {errors.name ? (
                                            <div className="text-error" id="nameError">{errors.name.message}</div>
                                        ) : (
                                                ''
                                            )}
                                    </div>
                                    <div className="fill-input">
                                        <label>Apellido *</label>
                                        <input
                                            className="input"
                                            name="apell"
                                            type="text"
                                            value={apell}
                                            onChange={(event) => setApell(event.target.value)}
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                                pattern: { // Validation pattern
                                                    value: /^[a-z-A-Z\D]+$/i,
                                                    message: 'Apellido inválido' // Error message when validation fails.
                                                }
                                            })}
                                            aria-describedby="apellError"
                                        />
                                        {errors.apell ? (
                                            <div className="text-error" id="apellError">{errors.apell.message}</div>
                                        ) : (
                                                ''
                                            )}
                                    </div>
                                </div>
                                <div className="group-fill">
                                    <div className="fill-input">
                                        <label>Direccion *</label>
                                        <input
                                            className="input"
                                            name="dir"
                                            type="text"
                                            value={dir}
                                            onChange={(event) => setDir(event.target.value)}
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                            })}
                                            aria-describedby="dirError"
                                        />
                                        {errors.dir ? (
                                            <div className="text-error" id="dirError">{errors.dir.message}</div>
                                        ) : (
                                                ''
                                            )}
                                    </div>
                                    <div className="fill-input">
                                        <label>Teléfono *</label>
                                        <input
                                            className="input"
                                            name="cel"
                                            type="text"
                                            value={cel}
                                            onChange={(event) => setCel(event.target.value)}
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                                pattern: { // Validation pattern
                                                    value: /^[0-9]*$/i,
                                                    message: 'Teléfono inválido' // Error message when validation fails.
                                                }
                                            })}
                                            aria-describedby="celError"
                                        />
                                        {errors.cel ? (
                                            <div className="text-error" id="celError">{errors.cel.message}</div>
                                        ) : (
                                                ''
                                            )}
                                    </div>
                                </div>
                            </div>
                            <div className="fill-button">
                                <button className="btn btn-primary button" type="submit">Crear Usuario</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Registro;