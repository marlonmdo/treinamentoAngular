import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cliente-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let cliente of clientes">
          <td>
            <a [href]="cliente.sobrenome" target="_blank">{{cliente.nome}}</a>
          </td>
          <td class="hidden-xs hidden-sm">{{cliente.sobrenome}}</td>
          <td>
            <button (click)="onEdit(cliente)" class="btn btn-primary">
              <span class="glyphicon glyphicon-pencil"></span>
              <span class="hidden-xs">Edit</span>
            </button>
            <button (click)="onRemove(cliente)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Delete</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class ClienteListComponent {

  @Input() clientes = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(cliente) {
    this.edit.emit(cliente);
  }

  onRemove(cliente) {
    this.remove.emit(cliente);
  }

}
