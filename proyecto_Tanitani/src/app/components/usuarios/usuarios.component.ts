import { Component, OnInit, OnDestroy } from '@angular/core';
import {UsuariosService}  from './../../services/usuarios.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit, OnDestroy {
  usuarios;

  subscriptor: Subscription;

  objUsuario = {
    usu_email:'',
    usu_tipo:'',
    usu_pass:'',  

  }
  objPersona={
    per_id:  '',
    per_nom: '',
    per_ape:'',
    per_dir:'',
    per_cel:'',
    per_est:'',
  }
  obejusuPer={
    usuario: this.objUsuario,
    persona: this.objPersona

  }


  usuariosSeleccionadas: Array<any> = [];
  
  constructor(private _sUsuarios: UsuariosService,
    private _sRouter: Router) { }

  ngOnInit() {
    this.traerUsuarios();
  }

  traerUsuarios() {
    this.subscriptor = this._sUsuarios.getUsuarios()
      .subscribe((resultado) => {
        this.usuarios = resultado.usuario;
        console.log(resultado);
        
      });
      
      this.usuariosSeleccionadas = [];
      
  }



  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

  crearUsuario() {
    $("#modalCrear").modal("show");
  }
  usu_crear(){
    console.log("sfsdff");
    
    this.subscriptor = this._sUsuarios.postUsuario(this.obejusuPer)
      .subscribe((rpta) => {
        if (rpta.id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            icon: 'success',
            text: 'El Usuario ha ha sido creada con éxito!',
            confirmButtonText: 'Ir a Usuarios',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this._sRouter.navigate(['Usuarios']);
            }
          })

        }
      })
  }

  eliminarUsuario(id) {
    Swal.fire({
      title: 'Estas Seguro?',
      text: 'El proceso no tiene vuelta atrás!',
      icon: 'warning',
      confirmButtonText: 'Sí, borrar!',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this._sUsuarios.deleteUsuario(id).subscribe((rpta) => {
          if (rpta.id) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'El Usuario ha sido borrado con éxito',
              showConfirmButton: false,
              timer: 1500
            });
            this.traerUsuarios();
          }
        })
      }
    })
  }

  abrirModalEditar(id) {
    // antes de abrir el modal
    // traer la factura dado su id
    // console.time("demoreishon");
    Swal.fire({
      icon: 'info',
      html: `<h2 class="display-4">Espere un momento<h2>
              <i class="fa fa-refresh fa-3x fa-spin" ></i> <br/>
              <p>Esperando al Servidor...</p>`,
      allowOutsideClick: false,
      showConfirmButton: false
    });

    this._sUsuarios.getUsuarioById(id).subscribe((rpta) => {
      // console.timeEnd("demoreishon");
      Swal.close();
      if (rpta.id) {
        // la factura existe y ya llegó
        this.objUsuario = rpta;

        $("#modalEditar").modal("show");
      }
    })
  }
  guardarCambios() {
    // consumir el servicio para editar la factura
    this._sUsuarios.putUsuarioById(this.objUsuario).subscribe((rpta) => {
      if (rpta.id) {
        // factura correctamente editada
        this.traerUsuarios();
        $("#modalEditar").modal("hide");

      }
    })
  }

  seleccionarUsuario(evento, usuario){
    if(evento.target.checked){
      this.usuariosSeleccionadas.push(usuario);
      console.log(this.usuariosSeleccionadas);
    } else {
      for (let i = 0; i < this.usuariosSeleccionadas.length; i++){
        if(usuario.id === this.usuariosSeleccionadas[i].id){
          //array.splice(posicion,cant_elementos);
      
          this.usuariosSeleccionadas.splice(i, 1);
          console.log(this.usuariosSeleccionadas);
        }
      }
    }
  }

  eliminarUsuarios(){
    console.log("eliminarFactras",this.usuariosSeleccionadas)
    Swal.fire({
      title: 'ar yu chur de cargarse estas facturas?',
      text: 'El proceso no tiene vuelta atrás!',
      icon: 'warning',
      confirmButtonText: 'Sí, borrar!',
      showCancelButton: true,
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.value) {
        this._sUsuarios.deleteUsuarios(this.usuariosSeleccionadas).subscribe((rpta) => {
          
          if (rpta[0].id) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Los Usuarios ha sido borrada con éxito',
              showConfirmButton: false,
              timer: 1500
            });
            
            this.traerUsuarios();
          }
          console.log(rpta);
        })
      }
    })
  }
}
