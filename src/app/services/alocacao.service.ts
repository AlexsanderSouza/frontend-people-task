import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Alocacao } from './../alocacao';
import * as URL from './url';

@Injectable()
export class AlocacaoService {
  
  //** emite sempre que o servidor envia todas as alocações */
  alocacao$: ReplaySubject<Alocacao[]> = new ReplaySubject<Alocacao[]>(1);

  constructor(private _http: HttpClient) {
  }

  /** remove uma alocacao do banco a partir de um id de tarefa e atualiza o front */
  removeAlocacao(alocacao: Alocacao) {
    const url = URL.baseUrl + URL.alocacaoDelete;
    const x = new HttpParams().set('params', alocacao.id.toString());

    this._http
      .delete<Alocacao>(url, { params: x })
      .subscribe((a: Alocacao) => {
        this.obtemTodasAsAlocacao(alocacao.tarefa.id);
      });

  }
  /** obtém todos os objetos Alocacao a partir do id de uma tarefa */
  obtemTodasAsAlocacao(tarefaID) {
    if (tarefaID == null || tarefaID == undefined) return;
    const url = URL.baseUrl + URL.PessoaByTarefa_GET + tarefaID;

    this._http
      .get<Alocacao[]>(url)
      .subscribe((al: Alocacao[]) => {
        this.alocacao$.next(al);
      });
  }
  /** grava as alocações no banco */
  addAlocacao(a: Alocacao): void {
    const url = URL.baseUrl + URL.alocacaoSave_POST;
    this._http
      .post<Alocacao>(url, a)
      .subscribe();
  }


}
