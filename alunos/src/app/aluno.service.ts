import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SuperService} from './comum/superservice.service';

@Injectable()
export class AlunoService extends SuperService {

  constructor(http:Http) {
    
    super('aluno',http);
   }

  filtra(filtro):Promise<any>{
    return this.http.get(`${this.baseUrl}/${this.collection}?searchFields=nome&q=${filtro}`)
        .toPromise().then(response=>response.json())
        .catch(this.errorHandler);
  }

}
