import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductosService } from './../../../../services/productos.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;

  objProducto = {
    pro_id: '',
    pro_nom: '',
    pro_prec: '',
    pro_est: '',
    pro_desc: ''
  }

  constructor(private _sProducto: ProductosService, private _sRouter: Router) { }

  ngOnInit() {
  }

  crearProducto(){
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando el Producto',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this._sProducto.postProductos(this.objProducto).subscribe((rpta) => {
      // console.log(rpta);
      if (rpta.contenido.pro_id) {
        Swal.fire({
          title: 'Exito!!!',
          icon: 'success',
          text: 'El producto ha sido creado con éxito!!',
          confirmButtonText: 'Ir a Productos',
          allowOutsideClick: false
          // ponemos lo anterior para que el usuario no haga click fuera del alert 
        }).then((result) => {
          if (result.value) {
            this._sRouter.navigate(['productos']);
          }
        })
      }


    })
  }
  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }

  }
}