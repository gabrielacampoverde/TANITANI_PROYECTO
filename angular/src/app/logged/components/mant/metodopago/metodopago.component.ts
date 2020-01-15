import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MetodoPagoService } from '../../../../services/metododepago.service';

declare var $: any;
@Component({
  selector: 'app-metodopago',
  templateUrl: './metodopago.component.html',
  styleUrls: ['./metodopago.component.css']
})
export class MetodopagoComponent implements OnInit ,OnDestroy{

  metpagos;
  subscripcion: Subscription;

  objMetPagoNew = {
    mpago_nom: '',
  }
  objMetPago = {
    mpago_id: '',
    mpago_nom: '',
  }
  constructor(private _sMetodoPago: MetodoPagoService, private _sRouter: Router) { }

  
  ngOnInit() {
    this.traerCategorias();
  }
  traerCategorias() {
    this.subscripcion = this._sMetodoPago.getMetodoPago()
      .subscribe((resultado) => { 
        this.metpagos = resultado;
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

    this.subscripcion = this._sMetodoPago.postMetodoPago(this.objMetPagoNew)
      .subscribe((rpta) => {
        console.log(rpta);
        if (rpta.contenido.mpago_id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            text: 'El Metodo de Pago se ha creado exitosamente!!',
            confirmButtonText: 'Ir a Mantenimiento Metodos de Pago',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this.traerCategorias();
              this.objMetPagoNew = {
                mpago_nom: '',
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
    this._sMetodoPago.getMetodoPagoById(id).subscribe((rpta) => {
      console.log(rpta);


      if (rpta.metPago.mpago_id) {
        console.log("logrado");
        
        this.objMetPago = rpta.metPago;

        $("#modalEditar").modal("show");
      }
    })
  }

  AbrirModalCrearMetPago() {
    $("#modalCrear").modal("show");
  }

  Guardar() {
    console.log('Metodo de Pago');
    let obj2 = {
      MetodoPago: this.objMetPago
    }
    this._sMetodoPago.putMetodoPagoById(obj2).subscribe((rpta) => {
      console.log(obj2);
      if (rpta.content.mpago_id) {
        this.traerCategorias();
        $("#modalEditar").modal("hide");
      }
    })
  }
 

  eliminarMetPago(id) {
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

        this._sMetodoPago.deleteMetodoPago(id).subscribe((rpta) => {
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
