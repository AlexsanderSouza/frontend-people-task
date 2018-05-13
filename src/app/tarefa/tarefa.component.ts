import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../pessoa';
import { tarefa } from '../tarefas';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  tarefas: Array<tarefa>; 
  dtIni = "2018-11-17";
  dtFim = "2019-12-15";

  constructor() {

    this.tarefas = [
      {titulo: 'Alex', descricao: 'teste', dtIni: new Date(this.dtIni), dtFim: new Date(this.dtFim)},
  ];

   }

  ngOnInit() {
  }

}