import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './component/home/home.component';
import { FormularioComponent } from './component/formulario/formulario.component';

import {RUTAS} from './app.routes';
import { CrearDatosComponent } from './component/crear-datos/crear-datos.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    FormularioComponent,
    CrearDatosComponent,
    FilterPipe,
    
    HeaderComponent,
    FooterComponent
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
