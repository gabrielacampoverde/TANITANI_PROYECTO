import { Component, OnInit,OnDestroy} from '@angular/core';
import { OrdenesService } from './../../../../services/ordenes.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


declare var $: any;

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})

export class OrdenesComponent implements OnInit,OnDestroy {
  UsuOrdenes;
  UsuOrdenesDet;
  susbscriptor: Subscription;

  ObjOrdenes = {
    pro_id: '',
    per_nom: '',
    per_cel:'',
    pro_prec: '',
    pro_est: '',
    t_usuarios:'',
    pro_det: '',
    pro_img: '',
    pro_desc: '',
    pro_stock: '',
    cat_id:''
  }

  // NewPersonas = {
  //   pro_id: '',
  //   per_nom: '',
  //   per_cel:'',
  //   pro_prec: '',
  //   pro_est: '',
  //   t_usuarios:'',
  //   pro_det: '',
  //   pro_img: '',
  //   pro_desc: '',
  //   pro_stock: '',
  //   cat_id:''
  // }
  ordenesSeleccionadas: Array<any> = [];
  constructor(private _sOrdenes: OrdenesService, private _sRouter: Router) { }

  ngOnInit() {
    this.traerOrdenes();
    this.traerOrdenesDet();
    
  }

  traerOrdenesDet() {
    this.susbscriptor = this._sOrdenes.getOrdenesdet().subscribe((resultado) => {
      console.log("res",resultado)

      this.UsuOrdenesDet = resultado.content;
      console.log("detalles",this.UsuOrdenesDet);
      console.log("cantidad de oredenes",this.UsuOrdenes.length);
      // console.log("solo ordenes",this.UsuOrdenes[0].t_ordens);
      // console.log("solo ordenes",this.UsuOrdenes[1].t_ordens);
      for (let i = 0; i < this.UsuOrdenes.length; i++) {
        console.log("solo ordenes principal",this.UsuOrdenes[i].t_ordens);
        
      }
      console.log("final",this.UsuOrdenes);
    });
  }





  traerOrdenes() {
    this.susbscriptor = this._sOrdenes.getOrdenes().subscribe((resultado) => {
      console.log("res",resultado)

      this.UsuOrdenes = resultado.content;
      console.log("res imagen",this.UsuOrdenes);
      console.log("cantidad de oredenes",this.UsuOrdenes.length);
      // console.log("solo ordenes",this.UsuOrdenes[0].t_ordens);
      // console.log("solo ordenes",this.UsuOrdenes[1].t_ordens);
      for (let i = 0; i < this.UsuOrdenes.length; i++) {
        console.log("solo ordenes principal",this.UsuOrdenes[i].t_ordens);
        
      }
      console.log("final",this.UsuOrdenes);
    });
  }

  crearUsuarioPersona()
  {
    //   Swal.fire({
    //   title: 'Espere un momento',
    //   text: 'Estamos guardando el Usuario',
    //   allowOutsideClick: false,
    //   showConfirmButton: false
    // })
    // let objUnion = {
    //   usuario: this.objNewUsuario,
    //   persona:this.objNewPersona
    // }
    
    // this.subscripcion = this._sUsuarios.postUsuario(objUnion)
    //   .subscribe((rpta) => {
        
    //     if (rpta.content.usu_id) {
    //       // si tiene un campo id asignado, implica que el objeto fue creado
    //       Swal.fire({
    //         title: 'Éxito!',
    //         text: 'El Usuario se ha creado exitosamente!',
    //         confirmButtonText: 'Ir a Usuario',
    //         allowOutsideClick: false
    //       }).then((result) => {
    //         if (result.value) {
    //           this.traerUsuarios();

    //         }
    //       })

    //     }
    //   })
    //   this.objNewUsuario=
    //   {
    //     usu_email:'',
    //     usu_pass:'',
    //     usu_tipo:''
    //   };
    //   this.objNewPersona=
    //   {
    //     per_nom: '',
    //     per_ape: '',
    //     per_dir: '',
    //     per_cel: '',
    //     per_est: '',
          
    //   }
    $("#modalCrear").modal("hide");  
  }

  AbrirModalCrearUsuario() {
    $("#modalCrear").modal("show");
    
  }

  abrirModalDetalle(id) {
    this._sOrdenes.getOrdenById(id).subscribe((rpta) => {

      if (rpta.content[0].per_id) {
        this.ObjOrdenes = rpta.content[0];
        console.log("modal",this.ObjOrdenes);
        console.log("nombre",this.ObjOrdenes.per_nom);
        console.log("modal",this.ObjOrdenes.t_usuarios[0]);
        
        // this.objPersona = rpta.content[0].t_persona
        // console.log(this.objPersona);
        
        $("#modalDetalle").modal("show");
      }
    })
  }
  abrirModalEditar(id) {
    this._sOrdenes.getOrdenById(id).subscribe((rpta) => {

      if (rpta.content[0].per_id) {
        this.ObjOrdenes = rpta.content[0];
        console.log("modal",this.ObjOrdenes);
        console.log("nombre",this.ObjOrdenes.per_nom);
        console.log("modal",this.ObjOrdenes.t_usuarios[0]);
        
        // this.objPersona = rpta.content[0].t_persona
        // console.log(this.objPersona);
        
        $("#modalEditar").modal("show");
      }
    })
  }
  ngOnDestroy() {
    this.susbscriptor.unsubscribe();
  }


}
