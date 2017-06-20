import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from './lista/lista.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path:'aluno',component:CrudComponent,
    children:[
      { path: '',component:ListaComponent},
      { path: 'detalhes/:id',component:DetalhesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
