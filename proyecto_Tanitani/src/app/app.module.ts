import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import {APP_ROUTES} from './app.routes';
//Importamos las Rutas del Proyecto

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
