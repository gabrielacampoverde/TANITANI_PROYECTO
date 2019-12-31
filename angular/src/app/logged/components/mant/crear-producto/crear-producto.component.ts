import { Component, OnInit,OnDestroy } from '@angular/core';
import { ProductosService } from './../../../../services/productos.service';
import {CategoriasService} from './../../../../services/categorias.service';

import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CategoriasComponent } from '../categorias/categorias.component';



@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit, OnDestroy {

  levels:Array<Object> = [
    {num: 0, name: "AA"},
    {num: 1, name: "BB"}
];

selectedLevel = "";

  cargado=false;
  imgUrl;
  subscriptor: Subscription;
  categorias;

  objProducto = {
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

  testcat = "";

  constructor(private _sProducto: ProductosService, private _sRouter: Router, private _sCategoria:CategoriasService) { 
    this.traerCategorias();
  }

  
  ngOnInit() {
    
  }

  traerCategorias() {
    this.subscriptor = this._sCategoria.getCategorias().subscribe((resultado) => {
      this.categorias = resultado.content;
      console.log("categorias",this.categorias);
      this.cargado = true;
      
      
    });
  }

onUpload(e){
  // console.log('subir',e.target.files[0]);
  // const id=Math.random().toString(36).substring(2);
  // const file=e.target.files[0];
  // const filePath='imagenes/logo.png';
  // const ref=this._sProducto.ref(filePath)
  
}

  crearProducto(){
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando el Producto',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this._sProducto.postProductos(this.objProducto).subscribe((rpta) => {
      console.log(rpta);
      if (rpta.producto.pro_id) {
        Swal.fire({
          title: 'Exito!!!',
          icon: 'success',
          text: 'El producto ha sido creado con éxito!!',
          confirmButtonText: 'Ir a Productos',
          allowOutsideClick: false
          // ponemos lo anterior para que el usuario no haga click fuera del alert 
        }).then((result) => {
          if (result.value) {
            this._sRouter.navigate(['productos']);
          }
        })
      }


    })
    console.log(this.objProducto)
    
  }




  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }

  }
}


