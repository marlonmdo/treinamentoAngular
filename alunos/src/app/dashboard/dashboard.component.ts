import { Component, OnInit } from '@angular/core';
import { CursoService } from 'app/curso.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaCurso:any[];
  
  constructor(
    private cursoService:CursoService,
    ) { }

  ngOnInit() {
    this.atualiza();
  }

  atualiza(){
    this.cursoService.getAll().then(response=>{
      this.listaCurso=response.values;
    });
  }

}
