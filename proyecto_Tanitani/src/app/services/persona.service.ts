import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor(private _sHttp:HttpClient) { }
  getPersona():Observable<any>
  {
    return this._sHttp.get(`${URL_BACKEND}/Persona`);
  }
  postPersona(objPersona): Observable<any> {
    let objPersonaString = JSON.stringify(objPersona);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/Persona`, objPersonaString, { headers: misHeaders });
  }
  getPersonaById(id): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/Persona/${id}`);
  }
  putPersonaById(objPersona): Observable<any> {
    let objPersonaString = JSON.stringify(objPersona);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.put(`${URL_BACKEND}/Persona`, objPersonaString, { headers: misHeaders })
  }
  deletePersona(id):Observable<any>
  {
    return this._sHttp.delete(`${URL_BACKEND}/Persona/${id}`);
  }
}
