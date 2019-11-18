import { Component, OnInit, OnDestroy } from '@angular/core';
import { FloresService } from '../../services/flores.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $: any;


@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  promociones;
  suscripcion: Subscription;
  filterPost = '';
  //no edito el id solo lo muestro 
  objFlores = {
    id: '',
    nombre: '',
    precio: '',
    descrip: ''
  }
  objImagen = {
    id: '',
    url: ''
  }
  constructor(private _flores: FloresService, private _sRoute: Router) { }

  ngOnInit() {
    this.Traerflores();
  }

  Traerflores() {
    this.suscripcion = this._flores.recibidor()
      .subscribe((resultado) => {
        this.promociones = resultado;
      });

  }
  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  agregar(id) {
    let result;
    if (result.value) {
      this._flores.delete(id).subscribe((rpta) => {
        if (rpta.id) {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'Haz agregado al carrito de compras',
            showConfirmButton: false,
            timer: 1500
          });
          this.Traerflores();
        }
      });
    }
  }
}

