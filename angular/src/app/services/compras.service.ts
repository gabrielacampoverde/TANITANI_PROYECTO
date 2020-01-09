import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  constructor(private _sHttp:HttpClient) { }
  getCompras():Observable<any>
  {
    return this._sHttp.get(`${URL_BACKEND}/compras`);
  }
  postCompras(objCompras): Observable<any> {
    let objComprasString = JSON.stringify(objCompras);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/compras`, objComprasString, { headers: misHeaders });
  }
  getComprasById(id): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/compras/${id}`);
  }
  putComprasById(objCompras): Observable<any> {
    let objComprasString = JSON.stringify(objCompras);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.put(`${URL_BACKEND}/compras`, objComprasString, { headers: misHeaders })
  }
  deleteCompras(id):Observable<any>
  {
    return this._sHttp.delete(`${URL_BACKEND}/compras/${id}`);
  }

}
