import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClienteService {

  errorHandler = error => console.error('ClienteService error', error);
  private baseUrl = 'https://treinamentoangular.firebaseio.com/';
  private collection = 'clientes';

  constructor(private http: Http) { }

  addCliente(cliente) {
    const json = JSON.stringify(cliente);
    return this.http.post(`${this.baseUrl}/${this.collection}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getClientes() {
    return this.http.get(`${this.baseUrl}/${this.collection}.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  removeCliente(cliente) {
    return this.http.delete(`${this.baseUrl}/${this.collection}/${cliente.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateCliente(cliente) {
    const json = JSON.stringify({
      nome: cliente.nome,
      sobrenome: cliente.sobrenome
    });
    return this.http.patch(`${this.baseUrl}/${this.collection}/${cliente.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        nome: parsedResponse[id].nome,
        sobrenome: parsedResponse[id].sobrenome
      }))
      .sort((a, b) => a.nome.localeCompare(b.nome));
  }

}
