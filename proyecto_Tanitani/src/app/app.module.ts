import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importando el modulo HTTP
import { HttpClientModule } from '@angular/common/http';

//RUTAS
import {APP_ROUTES} from './app.routes';
//Importamos las Rutas del Proyecto

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register.component';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component';
// importamos el modulo de los formularios
// para tener la posibilidad de usar [(ngModel)]
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CrearFacturaComponent,
    FacturasComponent,
    VerFacturaComponent,
   
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
