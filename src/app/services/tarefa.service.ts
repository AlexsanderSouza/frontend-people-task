import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { tap } from 'rxjs/operators/tap';

import { Tarefa } from '../tarefa';
import * as URL from './url';

@Injectable()
export class TarefaService {
  /** emite sempre que o servidor envia todas as Tarefas */
  tarefas$: ReplaySubject<Tarefa[]> = new ReplaySubject<Tarefa[]>(1);

  constructor(private _http: HttpClient) {
    this.obtemTodasAsTarefas();
  }
  /** remove uma tarefa do banco a partir de um id de tarefa e atualiza o front */
  removeTarefas(tarefa: Tarefa) {
    // removendo da tabela por index comentario para conhecimento
    // const index = this._tarefas.indexOf(tarefa);
    // this._tarefas.splice(index, 1);
    // this.tarefas$.next([...this._tarefas]);

    const url = URL.baseUrl + URL.tarefaDelete;
    const x = new HttpParams().set('params', tarefa.id.toString());
    this._http
      .delete<Tarefa>(url, { params: x })
      .subscribe((tSalva: Tarefa) => {
        this.obtemTodasAsTarefas();
      });
  }
  /** obtem todas as tarefas existente no banco de dados */
  obtemTodasAsTarefas() {
    const url = URL.baseUrl + URL.tarefaObtemTodas_GET;

    this._http
      .get<Tarefa[]>(url)
      .subscribe((ps: Tarefa[]) => {
        this.tarefas$.next(ps);
      });
  }
  /**grava uma tarefa no banco de dados */
  addTarefas(t: Tarefa): void {
    const url = URL.baseUrl + URL.tarefaSave_POST;
    this._http
      .post<Tarefa>(url, t).pipe(
        tap((t: Tarefa) => this.obtemTodasAsTarefas())
      )
      .subscribe();
  }



}
