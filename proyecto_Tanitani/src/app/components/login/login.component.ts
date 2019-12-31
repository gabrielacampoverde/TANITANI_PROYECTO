import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private _sFactura: UsuariosService) { }

  ngOnInit() {
    this._sFactura.postUsuario({
      email:'a@c.com',
      pass:'123456'
    }).subscribe((rpta:any)=>{
      if(rpta){

      }
    });


  }


}
