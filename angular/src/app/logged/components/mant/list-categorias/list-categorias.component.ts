import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriasService } from './../../../../services/categorias.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


declare var $: any;
@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit,OnDestroy {

  categorias;
  susbscriptor: Subscription;

  ObjCategoria = {
    cat_id: '',
    cat_nom: ''
  }

 
  constructor(private _sCategorias: CategoriasService, private _sRouter: Router) { }

  ngOnInit() {
    this.traerCategorias();
  }

  traerCategorias() {
    this.susbscriptor = this._sCategorias.getCategorias().subscribe((resultado) => {
      this.categorias = resultado;
      console.log(this.categorias);
      
    });
  }

  ngOnDestroy() {
    this.susbscriptor.unsubscribe();
  }

 
}
