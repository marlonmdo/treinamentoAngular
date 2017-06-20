import { CursoDetalhesComponent } from './detalhes/detalhes.component';
import { CursoListaComponent } from './lista/lista.component';
import { CursoCrudComponent } from './crud/crud.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'curso', component: CursoCrudComponent,
    children: [
      { path: '', component: CursoListaComponent },
      { path: 'detalhes/:id', component: CursoDetalhesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule {
  constructor(){
    
  }
 }
