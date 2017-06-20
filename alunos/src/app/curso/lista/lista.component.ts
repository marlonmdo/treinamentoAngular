import { Component, OnInit } from '@angular/core';
import { SuperLista } from "app/comum/superlista.component";
import { CursoService } from "app/curso.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'listacurso',
  templateUrl: '../../comum/lista.component.html',
  styleUrls: ['../../comum/lista.component.css']
})
export class CursoListaComponent extends SuperLista implements OnInit {

  constructor(service:CursoService, router:Router, route: ActivatedRoute) { 
    super(service,router,route);
    this.cols = [ {field: 'nome', header: 'Nome'}, {field: 'version', header: 'Versão'} ];
  }

}
