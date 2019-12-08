import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';



import {RUTAS} from './app.routes';

import {FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';





@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
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
