import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Alocacao } from './../alocacao';
import { Injectable } from '@angular/core';

@Injectable()
export class AlocacaoService {

  private _alocacoes: Alocacao[] = [
    // {nomeUsuario: 'Alex', tituloTarefa: 'TaskALex'},
    // {nomeUsuario: 'Geane', tituloTarefa: 'TAskGeane'},
  ];

  alocacao$: ReplaySubject<Alocacao[]> = new ReplaySubject<Alocacao[]>(1);

  constructor() {
    // this.alocacao$.next(this._alocacoes); //vamos precisar se for usar um banco com dados existentes
   }

   addAlocacao(alocacao: Alocacao){
     this._alocacoes.push(alocacao);
     this.alocacao$.next([...this._alocacoes]);
   }

}
