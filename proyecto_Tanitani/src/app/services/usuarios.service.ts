import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND } from './../../environments/environment.prod';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  arregloRespuestas: Array<any> = [];
  
  constructor(private _sHttp: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/api/usuario`);
  }
  postUsuario(objUsuario): Observable<any> {

    let objUsuarioString = JSON.stringify(objUsuario);
    // creando headers
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");

    return this._sHttp.post(`${URL_BACKEND}/api/usuario/crear`,
      objUsuarioString,
      { headers: misHeaders });
  }
  deleteUsuario(id): Observable<any> {
    return this._sHttp.delete(`${URL_BACKEND}/usuario/${id}`);
  }
  getUsuarioById(id): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/usuario/${id}`);
  }
  putUsuarioById(objUsuario): Observable<any> {

    let objUsuarioString = JSON.stringify(objUsuario);

    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.put(`${URL_BACKEND}/usuario/${objUsuario.id}`,
                            objUsuarioString, { headers: misHeaders });
  }

  deleteUsuarios(arregloUsuarios): Observable<any>{
    console.log("servicio",arregloUsuarios);
    arregloUsuarios.forEach(usuario => {
      console.log("foreach",usuario)
      const respuesta = this._sHttp.delete(`${URL_BACKEND}/usuarios/${usuario.id}`);
      this.arregloRespuestas.push(respuesta); 
      console.log("s",this.arregloRespuestas);
    });
    try {
      return forkJoin(this.arregloRespuestas);
    } finally {
      this.arregloRespuestas = [];
    }

  }

}
