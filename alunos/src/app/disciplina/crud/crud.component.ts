import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from './../../disciplina.service';
import { SuperCrud } from './../../comum/supercrud.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent extends SuperCrud implements OnInit {

    constructor(service:DisciplinaService) { 
      super(service);
    }
  ngOnInit() {
  }

}
