import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DisciplinaService } from './../../disciplina.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SuperLista } from '../../comum/superlista.component';

@Component({
  selector: 'app-lista',
  templateUrl: '../../comum/lista.component.html',
  styleUrls:  ['../../comum/lista.component.css']
})
export class ListaComponent extends SuperLista implements OnInit {

  constructor(service:DisciplinaService, router:Router, route: ActivatedRoute) {
    console.log("LISTA COMPONENTE DISCIPLINA")
    super(service,router,route);
    this.cols = [ {field: 'nome', header: 'Nomes'}, {field: 'version', header: 'Versão'} ];
    

   }

}
