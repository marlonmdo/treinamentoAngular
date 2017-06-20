import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule,GrowlModule, DataListModule} from 'primeng/primeng';     //accordion and accordion tab
import { ToolbarModule,ButtonModule,SplitButtonModule} from 'primeng/primeng';
import { DataTableModule,SharedModule} from 'primeng/primeng';
import { InputTextModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoCrudComponent } from './crud/crud.component';
import { CursoListaComponent } from './lista/lista.component';
import { CursoDetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,PanelModule,
    CursoRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,GrowlModule,DataListModule,ToolbarModule,ButtonModule,SplitButtonModule,
    DataTableModule,SharedModule,InputTextModule,AutoCompleteModule
  ],
  declarations: [CursoCrudComponent, CursoListaComponent, CursoDetalhesComponent]
})
export class CursoModule {

   constructor(){
     console.log("CursoModule");
   }
 }
