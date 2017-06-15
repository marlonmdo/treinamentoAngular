import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClienteService } from './cliente.service';
import { AppComponent } from './app.component';
import { ClienteEditComponent } from './cliente-edit.component';
import { ClienteListComponent } from './cliente-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, ClienteEditComponent, ClienteListComponent],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
