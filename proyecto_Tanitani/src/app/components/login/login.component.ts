import { Component, OnInit } from '@angular/core';
import {FacturasService} from '../../services/facturas.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private _sFactura: FacturasService) { }

  ngOnInit() {
    this._sFactura.postFactura({
      email:'a@c.com',
      pass:'123456'
    }).subscribe((rpta:any)=>{
      if(rpta){

      }
    });


  }


}
