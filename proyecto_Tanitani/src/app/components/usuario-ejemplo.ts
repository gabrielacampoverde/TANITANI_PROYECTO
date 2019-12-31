import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2'
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';
import { ProveedorService } from '../../../../services/proveedores.service';

declare var $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls : ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit,OnDestroy {

  usuarios;
  clientes;
  proveedores;
  subscripcion: Subscription;
  
  objNewUsuario={
        usu_email:'',
        usu_pass:'',
        usu_est:'',
        usu_tipo:'cliente'
  }
  objcliente=
  {
      cli_ndoc:'',
      cli_nom:'',
      cli_ape:'',
      cli_tel:'',
      cli_dire:''
  }
  objUsuario={
    usu_id:'',
    usu_email:'',
    usu_hash:'',
    usu_est:'',
    usu_tipo:''
  }
  objProveedor={
    prov_rz:'',
    prov_RUC:'',
    prov_pweb:'',
    prov_dir:'',
    cat_id:'',
    dist_id:''
  }
  constructor(private _sUsuarios:UsuarioService,private _sClientes:ClienteService,private _sProveedores:ProveedorService,private _sRouter:Router) { }

  ngOnInit() {
  this.traerUsuarios();
  this.traerCliente();
  this.traerProveedor();
  }
  ngOnDestroy(){
    try {
      this.subscripcion.unsubscribe();
    } catch (error) {

    }
  }
  traerUsuarios()
  { 
    this.subscripcion = this._sUsuarios.getUsuario().subscribe((resultado:any)=>{
      this.usuarios=resultado;
      console.log(resultado.contenido);
      console.log(this.usuarios);
    })
  }
  traerCliente()
  {
    this.subscripcion = this._sClientes.getCliente().subscribe((resultado:any)=>{
      this.clientes=resultado;
    })
    
  }
  traerProveedor()
  {
    this.subscripcion = this._sProveedores.getProveedor().subscribe((resultado:any)=>{
      this.proveedores=resultado;
    })
    
  }

  crearUsuarioYCliente()
  {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos guardando el Usuario',
      allowOutsideClick: false,
      showConfirmButton: false
    })
    let objUnion = {
      usuario: this.objNewUsuario,
      cliente:this.objcliente
    }
    console.log(
      objUnion
    );
    
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
    $("#modalCrear").modal("hide");
  }
  Cancelar() {
    $("#modalEditar").modal("hide");
    $("#modalCrear").modal("hide");
  }
  abrirModalEditar(id) {
    this._sUsuarios.getUsuarioById(id).subscribe((rpta) => {
      console.log(rpta.Usuario.prod_id);


      if (rpta.Usuario.usu_id) {
        this.objUsuario = rpta.Usuario;

        $("#modalEditar").modal("show");
      }
    })
  }
  AbrirModalCrearUsuario() {
    $("#modalCrear").modal("show");
    this.objNewUsuario;
  }

  Guardar() {
    let objPro2 = {
      Usuario: this.objUsuario
    }
    this._sUsuarios.putUsuarioById(objPro2).subscribe((rpta) => {
      console.log(objPro2);
      if (rpta.content.usu_id) {
        this.traerUsuarios();
        $("#modalEditar").modal("hide");
      }
    })
  }
  crearUsuarioYProveedor()
  {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos guardando el Usuario',
      allowOutsideClick: false,
      showConfirmButton: false
    })
    let objUnion = {
      usuario: this.objNewUsuario,
      proveedor:this.objProveedor
    }
    console.log(
      objUnion
    );
    
    this.subscripcion = this._sUsuarios.postUsuario(objUnion)
      .subscribe((rpta) => {
        console.log(rpta.content.proveedorCreado.prov.id);
        
        if (rpta.content.usuarioCreado.prov_id) {
          // si tiene un campo id asignado, implica que el objeto fue creado
          Swal.fire({
            title: 'Éxito!',
            text: 'El Usuario se ha creado exitosamente!',
            confirmButtonText: 'Ir a Usuario',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              this.traerUsuarios();
              this.traerCliente();
              this.traerProveedor();
            }
          })

        }
      })
    $("#modalCrear").modal("hide");
  }
  eliminarUsuario(id) {
    console.log(id);

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

        console.log("ddd");

        this._sUsuarios.deleteUsuario(id).subscribe((rpta) => {
          console.log(rpta);

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
/////////////////////////////////////////////7html
<!-- Crear Usuario Cliente -->
<div class="modal fade" id="modalCrear" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Crear Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form class="mt-4 " #formulario="ngForm">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Email:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objNewUsuario.usu_email" name="cat_nom" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Pass:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objNewUsuario.usu_pass" name="usu_pass" placeholder="Ejm: Computadora,Television,etc">
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Tipo:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objNewUsuario.usu_tipo" name="usu_tipo" disabled>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Nombre:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objcliente.cli_nom" name="cli_nom" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Apellido:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objcliente.cli_ape" name="cli_ape" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Telefono:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objcliente.cli_tel" name="cli_nom" placeholder="Ejm: 994874575,988544887,etc">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Direccion:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objcliente.cli_dire" name="cli_ape" placeholder="Ejm: Sachaca,Tahuaycani,etc">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="">Ndoc:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objcliente.cli_ndoc" name="cli_nom" placeholder="Ejm: 78475842,etc">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <div class="form-group">
                    <button type="submit" class="btn btn-block btn-lg btn-dark" [disabled]="!formulario.valid" (click)="crearUsuarioYCliente()">
                        <i class="fas fa-save"></i>
                        Crear Cliente
                    </button>
                    <button type="submit" class="btn btn-block btn-lg btn-dark" (click)="Cancelar()">
                        <i class="fas fa-arrow-alt-circle-left"></i> Volver
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Crear Usuario Proveedor -->
<!-- <div class="modal fade" id="modalCrear" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Crear Proveedor</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form class="mt-4 " #formulario="ngForm">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Email:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objNewUsuario.usu_email" name="usu_email" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Pass:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objNewUsuario.usu_pass" name="usu_pass" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Razon Social:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objProveedor.prov_rz" name="prov_rz" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                                <div class="col-md-6">
                                    <label for="">Telefono:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objProveedor.prov_pweb" name="cli_nom" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="">RUC:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objProveedor.prov_RUC" name="prov_RUC" placeholder="Ejm: Computadora,Television,etc">
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="">Direccion De la Tienda:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objProveedor.prov_dir" name="cli_ape" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <div class="form-group">
                    <button type="submit" class="btn btn-block btn-lg btn-dark" [disabled]="!formulario.valid" (click)="crearUsuarioYCliente()">
                        <i class="fas fa-save"></i>
                        Crear Proveedor
                    </button>
                    <button type="submit" class="btn btn-block btn-lg btn-dark" (click)="Cancelar()">
                        <i class="fas fa-arrow-alt-circle-left"></i> Volver
                    </button>
                </div>
            </div>
        </div>
    </div>
</div> -->
<!-- Modificar Datos Usuarios -->

<div class="modal fade" id="modalEditar" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Bienvenido al menu editar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form class="mt-4 " #formularios="ngForm">

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="">Id de la Usuario:</label>
                                    <input type="text" required class="form-control" [(ngModel)]="objUsuario.usu_id" name="usu_id" disabled>
                                </div>
                                <div class="col-md-6">
                                    <label for="">Email:</label>
                                    <input type="text" class="form-control" required [(ngModel)]="objUsuario.usu_email" name="usu_nom" placeholder="Ejm: Computadora,Television,etc">
                                </div>
                            </div>
                        </div>

                        <br>
                        <hr>
                        <hr>
                        <div class="form-group">
                            <button type="submit" class="btn btn-block btn-lg btn-dark" [disabled]="!formularios.valid" (click)="Guardar()">
                                            <i class="fas fa-save"></i>
                                            Guardar Usuario
                                        </button>
                            <br>
                            <button type="submit" class="btn btn-block btn-lg btn-dark" (click)="Cancelar()">
                                <i class="fas fa-arrow-alt-circle-left"></i> Volver
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="container">
    <div>
        <div class="alert alert-success text-center" role="alert" *ngIf="!usuarios">
            <h4 class="alert-heading">Cargando..</h4>
            <p>
                <i class="fa fa-refresh fa-3x fa-spin" aria-hidden="true"></i>
            </p>
        </div>
        <div *ngIf="usuarios" class="animated slideInLeft">
            <table class="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Tipo</th>
                        <th>Contraseña</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let usu of usuarios.contenido">
                        <td>{{usu.usu_id}}</td>
                        <td>{{usu.usu_email}}</td>
                        <td>{{usu.usu_est}}</td>
                        <td>{{usu.usu_tipo}}</td>
                        <td class="pass">{{usu.usu_hash}}</td>
                        <td style="display: flex;">
                            <button class="btn btn-danger" (click)="eliminarUsuario(usu.usu_id)">
                                    <i class="fas fa-trash"></i>
                                </button>

                            <button class="btn btn-secondary ml-2" (click)="abrirModalEditar(usu.usu_id)">
                                    <i class="fas fa-edit"></i>
                                </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="btn btn-dark btnCrear animated tada infinite slow" (click)="AbrirModalCrearUsuario()">
                <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
            </button>
    </div>
</div>
////////////////////////////servicio

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_BACKEND } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _sHttp:HttpClient) { }
  getUsuario():Observable<any>
  {
    return this._sHttp.get(`${URL_BACKEND}/usuario`);
  }
  postUsuario(objUsuario): Observable<any> {
    let objUsuarioString = JSON.stringify(objUsuario);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/usuario/registrar`, objUsuarioString, { headers: misHeaders });
  }
  postProveedorUsuario(objUsuario): Observable<any> {
    let objUsuarioString = JSON.stringify(objUsuario);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.post(`${URL_BACKEND}/usuario/registrar2`, objUsuarioString, { headers: misHeaders });
  }
  getUsuarioById(id): Observable<any> {
    return this._sHttp.get(`${URL_BACKEND}/usuario/${id}`);
  }
  putUsuarioById(objUsuario): Observable<any> {
    let objUsuarioString = JSON.stringify(objUsuario);
    let misHeaders = new HttpHeaders().set("Content-Type", "application/json");
    return this._sHttp.put(`${URL_BACKEND}/usuario`, objUsuarioString, { headers: misHeaders })
  }
  deleteUsuario(id):Observable<any>
  {
    return this._sHttp.delete(`${URL_BACKEND}/usuario/${id}`);
  }

}
