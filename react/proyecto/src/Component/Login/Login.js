import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import { useForm } from 'react-hook-form'
import 'toastr/build/toastr.min.css'
import { URL_BACKEND } from "./../../environments/environments";

const Login = ({signin}) => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        const iniciarSesion = event => {
            event.preventDefault();
            signin(values.email, values.password);
        }
    }
    let usuRef = React.createRef();
    let passRef = React.createRef();
    console.log("ref",usuRef);
    

    
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
                                            ref={register({
                                                required: 'Este campo es requerido', // Error message when field is left empty.
                                                pattern: { // Validation pattern
                                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/i,
                                                    message: 'Contraseña inválida. Mínimo ocho caracteres, al menos una letra y un número' // Error message when validation fails.
                                                }
                                            })
                                        }
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
export default Login;