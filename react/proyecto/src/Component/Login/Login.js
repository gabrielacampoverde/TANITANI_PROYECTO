import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import toastr from 'toastr';
import { useForm } from 'react-hook-form'
import 'toastr/build/toastr.min.css'
import { URL_BACKEND } from "./../../environments/environments";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        let misHeaders = {
            "Content-Type": "application/json"
        }
        let contenido = {
            usu_email: email,
            usu_pass: pass

        }
        axios.post(`${URL_BACKEND}/api/usuario/loggin`, contenido, {
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