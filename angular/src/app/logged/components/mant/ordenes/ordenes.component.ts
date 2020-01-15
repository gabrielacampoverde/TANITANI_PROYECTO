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
  ordenes;
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
  }

  traerOrdenes() {
    this.susbscriptor = this._sOrdenes.getOrdenes().subscribe((resultado) => {
      console.log("res",resultado)

      // resultado.Producto.map(item => {
      //   let itemTmp = Object.assign({}, item);
      //   // str.substring(str.lastIndexOf('/') + 1); 
      //   let texto = itemTmp.pro_img.substring(itemTmp.pro_img.lastIndexOf('\\')+1)
      //   console.log("text",texto)
      //   console.log("tmp",itemTmp.pro_img);
      // })
      this.ordenes = resultado.content;
      console.log("res imagen",this.ordenes);
      
    });
  }

  ngOnDestroy() {
    this.susbscriptor.unsubscribe();
  }


}
