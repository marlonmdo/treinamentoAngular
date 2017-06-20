import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SuperDetalhes } from '../../comum/superdetalhes.component';
import { AlunoService } from './../../aluno.service';
import { CursoService } from './../../curso.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent  extends SuperDetalhes  implements OnInit {

cursos = [];
 constructor(service:AlunoService,router:Router, route:ActivatedRoute, private cursoService: CursoService) { 
    super(service,router,route);
  }
 
  ngOnInit() {
    super.ngOnInit();
    this.atualizaCurso();

  }

  atualizaCurso() {
    this.cursoService.getAll().then(response => {
      this.cursos = response.values;
    });
  }

  filtrarCursos(event) {
    let query = event.query;
    this.cursoService.filtra(query).then(response => {
      this.cursos = response.values;
    });
  }




}
