import { Component, OnInit, OnDestroy} from '@angular/core';
import { CategoriasService } from './../../../../services/categorias.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnDestroy {
 
 categorias;
  susbscriptor: Subscription;

  ObjCategoria = {
    cat_id: '',
    cat_nom: ''
  }

  categoriasSeleccionadas: Array<any> = [];
  constructor(private _sCategorias: CategoriasService, private _sRouter: Router) { }

  ngOnInit() {
    this.traerCategorias();
  }

  traerCategorias() {
    this.susbscriptor = this._sCategorias.getCategorias().subscribe((resultado) => {
      this.categorias = resultado;
      console.log(this.categorias);
      
    });
  }

  ngOnDestroy() {
    this.susbscriptor.unsubscribe();
  }

  crearCategoria() {
    this._sRouter.navigate(['categorias', 'crear']);
  }

  eliminarCategoria(id) {
    Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: 'El proceso no tiene vuelta atrás!!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, Cancelar!',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      console.log(result);
      
      if (result.value) {
        console.log(`Elimando el id ${id}`);
        this._sCategorias.deleteCategoria(id).subscribe((rpta) => {
          console.log(`Elimando categoria ${id}`);
          // si la rsta tiene un id, quiere decir que fue completamente borrado
          console.log(rpta);
          
          if (rpta.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'La Categoria ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500

            })
            // luego llamamos a la funcion para volver a cargar el component
            this.traerCategorias();
          }
        })
      }
    })

  }

  abrirModalEditar(id) {
    console.log("probando "+id);
    // usamos jquery, typescript no reconoce el signo $ de jquery, show para mostrar hide para ocultar
    // traer la factura dada su id
    Swal.fire({
      icon: 'info',
      // title: 'Espere un momentooooooooooooooooo',
      // text: 'Esperando al servidor...',
      html: '<h2 class="display-4">Espere un momento</h2> <i class="fa fa-refresh fa-3x fa-spin"></i><br/> <p>Esperando al servidor...</p>',
      allowOutsideClick: false,
      showConfirmButton: false
    });


    // console.time("demoreishon");
    this._sCategorias.getCategoriaById(id).subscribe((rpta) => {
      Swal.close();
      // console.timeEnd("demoreishon");
      console.log(rpta);
      if (rpta.categoria.cat_id) {

        // la factura existe y ya llego
        this.ObjCategoria = rpta.categoria;
        console.log("paso");
        
        console.log(this.ObjCategoria);
        // console.log(id);
        $("#modalEditar").modal("show");
      }
    })
  }


  seleccionarCategoria(evento, categoria) {
    // si esque mi checkboc esta seleccionado haremos algo
    if (evento.target.checked) {
      this.categoriasSeleccionadas.push(categoria);
      console.log(this.categoriasSeleccionadas);
    } else { 
      for (let i = 0; i < this.categoriasSeleccionadas.length; i++) {
        if (categoria.id === this.categoriasSeleccionadas[i].id) {
          // array.splice(posicion,cont_elementos);
          this.categoriasSeleccionadas.splice(i, 1);
          console.log(this.categoriasSeleccionadas);
        }
      }
    }
  }
  guardarCambios() {
    // consumir el servicio para editar la factura
    this._sCategorias.putCategoriaById(this.ObjCategoria).subscribe((rpta) => {
      console.log(rpta);
      
      if (rpta.message) {
        // factura correctamente editada
        // volvemos a actualizar la lista de facturas  this.traerFacturas();
        this.traerCategorias();

        $("#modalEditar").modal("hide");
      }
    })

  }

  eliminarCategorias(){
    console.log("eliminarProductos", this.categoriasSeleccionadas)
    Swal.fire({
      title: 'Estas seguro de cargarse estas facturas',
      text: 'El proceso no tiene vuelta atrás!!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, Cancelar!',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.value) {
        
        this._sCategorias.deleteCategorias(this.categoriasSeleccionadas).subscribe((rpta) => {

          // si la rsta tiene un id, quiere decir que fue completamente borrado
          if (rpta[0].cat_id) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Las categorias han sido borradas con éxito',
              showConfirmButton: false,
              timer: 1500

            })
            // luego llamamos a la funcion para volver a cargar el component
            this.traerCategorias();
          }
          console.log(rpta);
        })
      }
    })

  }
}
