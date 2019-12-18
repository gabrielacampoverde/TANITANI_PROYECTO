import React, { Component } from 'react';
import { baseUrl } from "./../../config";
import Registro from './../Registro/Registro'

export default class loginYregistro extends Component {
   render() {
     return (
         
       <div> 
    <ul className="programming-languages" id="awesome">
        <li><span>Python</span></li>
        <li className="favorite" id="must-use"><span className="highlight">JavaScript</span></li>
    </ul>
    <div className="login-wrap">
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Login</label>
            <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" className="tab">Registro</label>
            <div className="login-form">
                <div className="sign-in-htm">
                    <div className="group">
                        <label for="user" className="label">Usuario</label>
                        <input id="user" type="text" className="input"/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Contraseña</label>
                        <input id="pass" type="password" className="input" data-type="password"/>
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" style={{borderColor: 'red solid 1px'}} />
                        <label for="check"><span className="icon"></span> Recuérdame</label>
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value="Ingresar" style={{color: '#B5141C'}}/>
                        <br/>
                        <hr/>
                        <br/>
                        <a href="#forgot" id="last">Olvidó su contraseña?</a>
                    </div>
                </div>
                <div className="sign-up-htm">
                    <Registro></Registro>
                     
				</div>
			</div>
		</div>
	</div>
</div>
);
   }
}
 
