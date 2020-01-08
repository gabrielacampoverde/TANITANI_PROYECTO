import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ComprasService } from '../../../../services/compras.service';

declare var $: any; 
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compras;
  subscripcion: Subscription;

  objComprasNew = {
    comp_descuento: '',
    comp_total_cup: '',
    comp_dep: '',
    comp_prov: '',
    comp_dist: '',
    comp_direc_ref: '',
    comp_tel_ref: ''
  }
  objCompras = {
    comp_id: '',
    comp_descuento: '',
    comp_total_cup: '',
    comp_dep: '',
    comp_prov: '',
    comp_dist: '',
    comp_direc_ref: '',
    comp_tel_ref: ''
  }
  constructor(private _sCompras: ComprasService, private _sRouter: Router) { }

  
  ngOnInit() {
    this.traerCompras();
  }
  traerCompras() {
    this.subscripcion = this._sCompras.getCompras()
      .subscribe((resultado) => { 
        this.compras = resultado;
      });
  }

  ngOnDestroy() {
    //this.subscripcion.unsubscribe();
    try {
      this.subscripcion.unsubscribe();
    } catch (error) {

    }
  }
  CrearCompras() {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos guardando la compra',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this.subscripcion = this._sCompras.postCompras(this.objComprasNew)
      .subscribe((rpta) => {
        console.log(rpta);
        if (rpta.contenido.comp_id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            text: 'El Metodo de Pago se ha creado exitosamente!!',
            confirmButtonText: 'Ir a Mantenimiento Metodos de Pago',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this.traerCompras();
              
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
    this._sCompras.getComprasById(id).subscribe((rpta) => {
      console.log(rpta);


      if (rpta.Compras.comp_id) {
        console.log("logrado");
        
        this.objCompras = rpta.Compras;

        $("#modalEditar").modal("show");
      }
    })
  }

  AbrirModalCrearCompras() {
    $("#modalCrear").modal("show");
  }

  Guardar() {
    console.log('Compras');
    let obj2 = {
      Compras: this.objCompras
    }
    this._sCompras.putComprasById(obj2).subscribe((rpta) => {
      console.log(obj2);
      if (rpta.content.comp_id) {
        this.traerCompras();
        $("#modalEditar").modal("hide");
      }
    })
  }
 

  eliminarCompras(id) {
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

        this._sCompras.deleteCompras(id).subscribe((rpta) => {
          console.log(rpta);

          if (rpta.id) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.traerCompras();
          }
        })
      }
    })
  }
}
