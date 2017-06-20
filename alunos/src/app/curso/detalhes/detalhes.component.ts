import { Component, OnInit } from '@angular/core';
import { SuperDetalhes } from "app/comum/superdetalhes.component";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CursoService } from "app/curso.service";

@Component({
  selector: 'app-cursodetalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class CursoDetalhesComponent extends SuperDetalhes implements OnInit {

  constructor(service: CursoService, router: Router,route: ActivatedRoute) {
    super(service,router,route);
  }

}
