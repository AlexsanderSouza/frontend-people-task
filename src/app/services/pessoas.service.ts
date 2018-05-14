import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import { Pessoa } from './../pessoa';
import { log } from 'util';


@Injectable()
export class PessoasService {

  private _pessoas: Pessoa[] = [
    // {nome: 'Alex', email: 'alex@gmail.com'},
    // {nome: 'Geane', email: 'geane@gmail.com'},
  ];

  pessoas$: ReplaySubject<Pessoa[]> = new ReplaySubject<Pessoa[]>(1);

  constructor() { 
    this.pessoas$.next(this._pessoas);
  }

  addPessoas(pessoa: Pessoa) {
    this._pessoas.push(pessoa);
    this.pessoas$.next([...this._pessoas]);
  }

  removePessoas(pessoa: Pessoa){
    const index = this._pessoas.indexOf(pessoa);
    this._pessoas.splice(index, 1);
    this.pessoas$.next([...this._pessoas]);
  }

}
