import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})


export class CrearUsuarioComponent implements OnInit, OnDestroy {
  subscriptor: Subscription;

  objUsuario = {
    per_id:  '',
    per_nombre: '',
    per_apellido:'',
    per_direccion:'',
    per_celular:'',
    per_estado:'',
    usu_email:'',
    usu_pass:'',  

  }

  constructor(private _sUsuario: UsuariosService,
    private _sRouter: Router) { }

  ngOnInit() {
  }

  crearUsuario() {

    Swal.fire({
      title:'Espere un momento',
      text:'Estamos registrando el Usuario',
      icon:'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this.subscriptor = this._sUsuario.postUsuario(this.objUsuario)
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

  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }
  }


}