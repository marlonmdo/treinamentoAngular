import { Component } from '@angular/core';
import { RelogioService } from './relogio.service';

@Component({
    selector: 'exibe-relogio',
    template: '<p> {{horarioAtual}} </p>'
})

export class ExibeRelogioComponent {

  horarioAtual: Date;

  constructor(relogioService: RelogioService){
      relogioService.generateHorarioAtual(1000,horarioAtual => this.horarioAtual = horarioAtual);
  }
}