import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriaService } from '../../../../services/categoria.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit,OnDestroy {

  categorias;
  subscripcion: Subscription;

  objCategoriaPost = {
    cat_nom: '',
  }
  objCategoria = {
    cat_id: '',
    cat_nom: '',
  }

  constructor(private _sCategorias: CategoriaService, private _sRouter: Router) { }

  
  ngOnInit() {
    this.traerCategorias();
  }
  traerCategorias() {
    this.subscripcion = this._sCategorias.getCategoria()
      .subscribe((resultado) => { 
        this.categorias = resultado.content;
        console.log("categorias",this.categorias);
        
      });
  }

  ngOnDestroy() {
    //this.subscripcion.unsubscribe();
    try {
      this.subscripcion.unsubscribe();
    } catch (error) {

    }
  }
  CrearCategoria() {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos guardando el producto',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this.subscripcion = this._sCategorias.postCategoria(this.objCategoriaPost)
      .subscribe((rpta) => {
        console.log(rpta);
        if (rpta.contenido.cat_id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            text: 'El Categoria se ha creado exitosamente!!',
            confirmButtonText: 'Ir a Categoria',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this.traerCategorias();
              this.objCategoriaPost = {
                cat_nom: '',
              }
            }
          })

        }
      })
    $("#modalCrear").modal("hide");
  }
  Cancelar() {
    $("#modalEditar").modal("hide");
    $("#modalCrear").modal("hide");
  }

  abrirModalEditar(id) {
    this._sCategorias.getCategoriaById(id).subscribe((rpta) => {
      console.log(rpta);


      if (rpta.categoria.cat_id) {
        this.objCategoria = rpta.categoria;

        $("#modalEditar").modal("show");
      }
    })
  }

  AbrirModalCrearCategoria() {
    $("#modalCrear").modal("show");
  }

  Guardar() {
    console.log('categoria');
    let objCat2 = {
      Categoria: this.objCategoria
    }
    this._sCategorias.putCategoriaById(objCat2).subscribe((rpta) => {
      console.log(objCat2);
      if (rpta.content.cat_id) {
        this.traerCategorias();
        $("#modalEditar").modal("hide");
      }
    })
  }
 

  eliminarCategoria(id) {
    console.log(id);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result);
      
      if (result.value) {

        console.log("ddd");

        this._sCategorias.deleteCategoria(id).subscribe((rpta) => {
          console.log(rpta);

          if (rpta.id) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.traerCategorias();
          }
        })
      }
    })
  }
}
