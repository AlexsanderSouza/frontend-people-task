import { tap } from 'rxjs/operators/tap';
import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import { log } from 'util';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Tarefa } from '../tarefa';
import * as URL from './url';

@Injectable()
export class TarefaService {
  
  private _tarefas: Tarefa[] = [ ];

  tarefas$: ReplaySubject<Tarefa[]> = new ReplaySubject<Tarefa[]>(1);

  constructor(private _http: HttpClient) { 
    // this.tarefas$.next(this._tarefas);
    this.obtemTodasAsTarefas();
  }

  addTarefas(tarefa: Tarefa){
    this.gravaTarefa(tarefa);
    //this.obtemTodasAsTarefas();
  }

  removeTarefas(tarefa: Tarefa){
    // const index = this._tarefas.indexOf(tarefa);
    // this._tarefas.splice(index, 1);
    // this.tarefas$.next([...this._tarefas]);

    const url = URL.baseUrl + URL.tarefaDelete;
    const x = new HttpParams().set('params', tarefa.id.toString());
    this._http
      .delete<Tarefa>(url,{params : x})
      .subscribe((tSalva: Tarefa) => {
        this.obtemTodasAsTarefas();
      });
  }

  obtemTodasAsTarefas() {
    const url = URL.baseUrl + URL.tarefaObtemTodas_GET;
    
    this._http
      .get<Tarefa[]>(url)
      .subscribe((ps: Tarefa[]) => {
        this.tarefas$.next(ps);
      });
  }

  gravaTarefa(t: Tarefa): void {
    const url = URL.baseUrl + URL.tarefaSave_POST;
    this._http
      .post<Tarefa>(url, t).pipe(
        tap((t: Tarefa) => this.obtemTodasAsTarefas())
      )
      .subscribe();
  }



}
