import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';
import Swal from 'sweetalert2'
import { UsuariosService } from './../../../../services/usuarios.service';
import { PersonasService } from './../../../../services/personas.service'
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls : ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit,OnDestroy {

  usuarios;
  personas;
  subscripcion: Subscription;
  
  objNewUsuario={
        usu_email:'',
        usu_pass:'',
        usu_tipo:''
  }
  objNewPersona=
  {
      per_nom: '',
      per_ape: '',
      per_dir: '',
      per_cel: '',
      per_est: '',
      
  }
  objPersona={
    per_id: '',
    per_nom: '',
    per_ape: '',
    per_dir: '',
    per_cel: '',
    per_est: ''
  }
  objUsuario={
    usu_id: '',
    usu_email: '',
    usu_hash: '',
    usu_tipo: ''
  }
  constructor(private _sUsuarios:UsuariosService,private _sPersonas:PersonasService,private _sRouter:Router) { }

  ngOnInit() {
    this.traerUsuarios();
    // this.traerPersona();
  }
  ngOnDestroy(){
    try {
      this.subscripcion.unsubscribe();
    } catch (error) {

    }
  }
  traerUsuarios()
  { 
    this.subscripcion = this._sUsuarios.getUsuarios().subscribe((resultado:any)=>{
      this.usuarios=resultado.content;
      
    })
  }
  // traerPersona()
  // {
  //   this.subscripcion = this._sPersonas.getPersona().subscribe((resultado:any)=>{
  //     this.clientes=resultado;
  //   })
    
  // }

  crearUsuarioPersona()
  {
    
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos guardando el Usuario',
      allowOutsideClick: false,
      showConfirmButton: false
    })
    let objUnion = {
      usuario: this.objNewUsuario,
      persona:this.objNewPersona
    }
    
    this.subscripcion = this._sUsuarios.postUsuario(objUnion)
      .subscribe((rpta) => {
        
        if (rpta.content.usu_id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            text: 'El Usuario se ha creado exitosamente!',
            confirmButtonText: 'Ir a Usuario',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this.traerUsuarios();

            }
          })

        }
      })
      this.objNewUsuario=
      {
        usu_email:'',
        usu_pass:'',
        usu_tipo:''
      };
      this.objNewPersona=
      {
        per_nom: '',
        per_ape: '',
        per_dir: '',
        per_cel: '',
        per_est: '',
          
      }
    $("#modalCrear").modal("hide");
    
  }
  Cancelar() {
    $("#modalEditar").modal("hide");
    $("#modalCrear").modal("hide");
  }
  abrirModalEditar(id) {
    this._sUsuarios.getUsuarioById(id).subscribe((rpta) => {

      if (rpta.content[0].usu_id) {
        this.objUsuario = rpta.content[0];
        console.log(this.objUsuario);
        
        this.objPersona = rpta.content[0].t_persona
        console.log(this.objPersona);
        
        $("#modalEditar").modal("show");
      }
    })
  }
  AbrirModalCrearUsuario() {
    $("#modalCrear").modal("show");
    
  }

  Guardar() {
    
    let objPro2 = {
      Usuario: this.objUsuario
    }
   
    let objPro3 = {
      Persona: this.objPersona
    }
    console.log(objPro3);
    
    this._sPersonas.putPersonaById(objPro3).subscribe((rpta) => {
      if (rpta.content.per_id) {
        this._sUsuarios.putUsuarioById(objPro2).subscribe((rpta) => {
          if (rpta.content.usu_id) {
            this.traerUsuarios();
            
            $("#modalEditar").modal("hide");
          }
        })
      }
    })
    
  }
  
  eliminarUsuario(id) {

    Swal.fire({
      title: 'Estas Seguro?',
      text: "No hay vuelta atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.value) {

        this._sUsuarios.deleteUsuario(id).subscribe((rpta) => {

          if (rpta.id) {
            Swal.fire(
              'Eliminado!',
              'Ha sido eliminado.',
              'success'
            );
            this.traerUsuarios();
          }
        })
        this._sPersonas.deletePersona(id).subscribe((rpta) => {

          if (rpta.id) {
            Swal.fire(
              'Eliminado!',
              'Ha sido eliminado.',
              'success'
            );
            this.traerUsuarios();
          }
        })
      }
    })
  }

}
