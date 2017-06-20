import { Component, OnInit } from '@angular/core';
import { SuperCrud} from '../../comum/supercrud.component';
import { CursoService } from "app/curso.service";

@Component({
  selector: 'app-cursocrud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CursoCrudComponent extends SuperCrud implements OnInit {

  constructor(service: CursoService) {
    super(service);
  }

}
