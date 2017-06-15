import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RelogioService } from './relogio.service';
import { AppComponent } from './app.component';
import { ExibeRelogioComponent } from './exibe-relogio.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ExibeRelogioComponent],
  providers: [RelogioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
