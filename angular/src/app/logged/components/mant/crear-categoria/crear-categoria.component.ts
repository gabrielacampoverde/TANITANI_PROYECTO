import { Component, OnInit,OnDestroy } from '@angular/core';
import { CategoriasService } from './../../../../services/categorias.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit, OnDestroy {

  subscriptor: Subscription;

  objCategoria = {
    cat_id: '',
    cat_nom: ''
  }

  constructor(private _sCategoria: CategoriasService, private _sRouter: Router) { }

  ngOnInit() {
  }

  crearCategoria(){
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando la Categoria',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this._sCategoria.postCategorias(this.objCategoria).subscribe((rpta) => {
      console.log(rpta.contenido.cat_id);
      if (rpta.contenido.cat_id) {
        Swal.fire({
          title: 'Exito!!!',
          icon: 'success',
          text: 'La categoria ha sido creado con éxito!!',
          confirmButtonText: 'Ir a Categorias',
          allowOutsideClick: false
          // ponemos lo anterior para que el usuario no haga click fuera del alert 
        }).then((result) => {
          if (result.value) {
            this._sRouter.navigate(['categorias']);
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


