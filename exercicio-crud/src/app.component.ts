import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'cliente-app',
  template: `
    <cliente-edit [cliente]="editacliente"
      (save)="save($event)" (clear)="clear()"></cliente-edit>
    <cliente-list [clientes]="clientes"
      (edit)="edit($event)" (remove)="remove($event)"></cliente-list>
  `,
})
export class AppComponent {

  clientes = [];
  editacliente = {};

  constructor(private clienteService: ClienteService) {
    clienteService.errorHandler = error =>
      window.alert('Oops! The server request failed.');
    this.reload();
  }

  clear() {
    this.editacliente = {};
  }

  edit(cliente) {
    this.editacliente = Object.assign({}, cliente);
  }

  remove(cliente) {
    this.clienteService.removeCliente(cliente)
      .then(() => this.reload());    
  }

  save(cliente) {
    if (cliente.id) {
      this.clienteService.updateCliente(cliente)
        .then(() => this.reload());
    } else {
      this.clienteService.addCliente(cliente)
        .then(() => this.reload());
    }
    this.clear();
  }

  private reload() {
    return this.clienteService.getClientes()
      .then(clientes => this.clientes = clientes);
  }

}
