import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {

  constructor(private _sHttp:HttpClient) { }
  getMetodoPago():Observable<any>
  {
    return this._sHttp.get(`${URL_BACKEND}/metpago`);
  }
  postMetodoPago(objMetodoPago): Observable<any> {
    let objMetodoPagoString = JSON.stringify(objMetodoPago);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/metpago`, objMetodoPagoString, { headers: misHeaders });
  }
  getMetodoPagoById(id): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/metpago/${id}`);
  }
  putMetodoPagoById(objMetodoPago): Observable<any> {
    let objMetodoPagoString = JSON.stringify(objMetodoPago);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.put(`${URL_BACKEND}/metpago`, objMetodoPagoString, { headers: misHeaders })
  }
  deleteMetodoPago(id):Observable<any>
  {
    return this._sHttp.delete(`${URL_BACKEND}/metpago/${id}`);
  }

}
