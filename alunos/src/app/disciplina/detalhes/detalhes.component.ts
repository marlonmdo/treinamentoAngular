import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SuperDetalhes } from '../../comum/superdetalhes.component';
import { DisciplinaService } from './../../disciplina.service';
import { AlunoService } from './../../aluno.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent extends SuperDetalhes implements OnInit {

  alunos = [];
  selecionado = { itens: [] };
  aluno;

  constructor(service: DisciplinaService, router: Router, route: ActivatedRoute, private alunoService: AlunoService) {
    super(service, router, route);
  }

  inserirAluno() {
    console.log(this.aluno);
    if (!this.selecionado.itens) {
      this.selecionado.itens = [];
    }
    let antigo = this.selecionado.itens;
    this.selecionado.itens = [];
    for (let i = 0; i < antigo.length; i++) {
      this.selecionado.itens.push(antigo[i]);
    }
    this.selecionado.itens.push({ aluno: this.aluno });
    
    this.aluno = null;
  }

  ngOnInit() {
    super.ngOnInit();
    this.atualizaAlunos();

  }

  atualizaAlunos() {
    this.alunoService.getAll().then(response => {
      this.alunos = response.values;
    });
  }

  filtrarAlunos(event) {
    let query = event.query;
    this.alunoService.filtra(query).then(response => {
      this.alunos = response.values;
    });
  }

}
