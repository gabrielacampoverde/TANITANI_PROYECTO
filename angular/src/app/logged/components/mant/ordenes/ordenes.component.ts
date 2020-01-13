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
    pro_nom: '',
    pro_prec: '',
    pro_est: '',
    pro_det: '',
    pro_img: '',
    pro_desc: '',
    pro_stock: '',
    cat_id:''
  }

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


  // abrirModalEditar(id) {
  //   this._sUsuarios.getUsuarioById(id).subscribe((rpta) => {

  //     if (rpta.content[0].usu_id) {
  //       this.objUsuario = rpta.content[0];
  //       console.log(this.objUsuario);
        
  //       this.objPersona = rpta.content[0].t_persona
  //       console.log(this.objPersona);
        
  //       $("#modalEditar").modal("show");
  //     }
  //   })
  // }

  ngOnDestroy() {
    this.susbscriptor.unsubscribe();
  }


}
