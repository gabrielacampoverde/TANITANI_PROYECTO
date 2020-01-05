import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importando el modulo HTTP
import { HttpClientModule } from '@angular/common/http';

//RUTAS
import {APP_ROUTES} from './app.routes';
//Importamos las Rutas del Proyecto

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

// importamos el modulo de los formularios
// para tener la posibilidad de usar [(ngModel)]
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/mantenimientos/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    UsuariosComponent,
    
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
