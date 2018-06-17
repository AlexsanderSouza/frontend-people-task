import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { log } from 'util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';


import { Alocacao } from './../alocacao';
import * as URL from './url';

@Injectable()
export class AlocacaoService {

  private _alocacoes: Alocacao[] = [];

  alocacao$: ReplaySubject<Alocacao[]> = new ReplaySubject<Alocacao[]>(1);

  constructor(private _http: HttpClient) {
    // this.alocacao$.next(this._alocacoes); //vamos precisar se for usar um banco com dados existentes
    
   }

   addAlocacao(alocacao: Alocacao){
    //  this._alocacoes.push(alocacao);
    //  this.alocacao$.next([...this._alocacoes]);
    this.gravaAlocacao(alocacao);
   }

   removeAlocacao(alocacao: Alocacao){
    //  const index = this._alocacoes.indexOf(alocacao);
    //  this._alocacoes.splice(index,1);
    //  this.alocacao$.next([...this._alocacoes]);
    const url = URL.baseUrl + URL.alocacaoDelete;
    const x = new HttpParams().set('params', alocacao.id.toString());
    
    this._http
      .delete<Alocacao>(url,{params : x})
      .subscribe((aSalva: Alocacao) => {
        this.obtemTodasAsAlocacao(alocacao.tarefa.id);
      });

   }

   obtemTodasAsAlocacao(tarefaID) {
    if( tarefaID == null || tarefaID == undefined) return;
    const url = URL.baseUrl + URL.PessoaByTarefa_GET + tarefaID;
    
    this._http
      .get<Alocacao[]>(url)
      .subscribe((al: Alocacao[]) => {
        this.alocacao$.next(al);
      });
  }

  gravaAlocacao(a: Alocacao): void {
    const url = URL.baseUrl + URL.alocacaoSave_POST;
    this._http
      .post<Alocacao>(url, a)
      .subscribe();
  }


}
