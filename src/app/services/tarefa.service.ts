import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

import { Tarefa } from '../tarefa';

@Injectable()
export class TarefaService {
  
  private _tarefas: Tarefa[] = [
    {titulo: 'Futebol', descricao: 'teste', dtIni: new Date("2018-11-17"), dtFim: new Date("2019-12-15")},
    {titulo: 'Estudar', descricao: 'teste', dtIni: new Date("2018-11-17"), dtFim: new Date("2019-12-15")},
];

  tarefas$: ReplaySubject<Tarefa[]> = new ReplaySubject<Tarefa[]>(1);

  constructor() { 
    this.tarefas$.next(this._tarefas);
  }

  addTarefas(tarefa: Tarefa){
    this._tarefas.push(tarefa);
    this.tarefas$.next([...this._tarefas]);
  }

}
