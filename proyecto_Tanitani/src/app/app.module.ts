import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { FormularioComponent } from './component/formulario/formulario.component';

import {RUTAS} from './app.routes';
import { CrearDatosComponent } from './component/crear-datos/crear-datos.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { PromocionesComponent } from './component/promociones/promociones.component';
import { ComplementosComponent } from './component/complementos/complementos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormularioComponent,
    CrearDatosComponent,
    FilterPipe,
    PromocionesComponent,
    ComplementosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RUTAS,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
