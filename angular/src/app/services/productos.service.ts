import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND} from './../../environments/environment.prod';

import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  arregloRespuestas: Array<any> = [];
  arregloTmp: Array<any> = [];
  constructor(private _sHttp: HttpClient) { }

  getProductos(): Observable<any> {
    // return this._sHttp.get(`https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita`);
    return this._sHttp.get(`${URL_BACKEND}/producto`);
  console.log(`${URL_BACKEND}/producto`);
 
  
  
    
  }
  postProductos(objProducto): Observable<any> {
    // colocar arriva HttpHeaders
    let objProductoString = JSON.stringify(objProducto);
    // creando headers
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    // return this._sHttp.post(`https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita`, objProductoString, { headers: misHeaders });
    return this._sHttp.post(`${URL_BACKEND}/productocat`, objProductoString, { headers: misHeaders });

  }
  deleteProducto(id): Observable<any> {
    // return this._sHttp.delete(`https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita/${id}`);
    return this._sHttp.delete(`${URL_BACKEND}/producto/${id}`);
  }

  getProductoById(id): Observable<any> {
    // funcion para obtener datos de un solo objeto
    // return this._sHttp.get(`https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita/${id}`);
    return this._sHttp.get(`${URL_BACKEND}/producto/${id}`);
  }
  putProductoById(objProducto): Observable<any> {
    // para actualizar la informacion editada

    let objProductoString = JSON.stringify(objProducto);
    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    // return this._sHttp.put(`https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita/${objProducto.prod_id}`, objProductoString, { headers: misHeaders });
    return this._sHttp.put(`${URL_BACKEND}/producto/${objProducto.pro_id}`, objProductoString, { headers: misHeaders });
  }

  deleteProductos(arregloProductos): Observable<any> {
    arregloProductos.forEach(producto => {
      // console.log(this.deleteFactura);
      // const respuesta = this._sHttp.delete(`https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita/${producto.prod_id}`);
      const respuesta = this._sHttp.delete(`${URL_BACKEND}/producto/${producto.prod_id}`);
      // console.log(this.deleteFactura);
    this.arregloRespuestas.push(respuesta);
    this.arregloTmp=this.arregloRespuestas;
    this.arregloRespuestas=[];
    });
    return forkJoin(this.arregloTmp); 
   }

}
