import { Component, OnInit } from '@angular/core';
// servicio para obtener los parametros enviados por la URL
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit {

  id: string;
  constructor(private _sActivatedRoute: ActivatedRoute) { }
  ngOnInit() {
    // this._sActivatedRoute.snapshot.paramMap.get('id');
    // obtener el parametro en la URL que lleva por nombre ':id'
    this.id = this._sActivatedRoute.snapshot.paramMap.get('id');
    console.log(`ID RECIBIDO ===> ${this.id}`);
  }

}
