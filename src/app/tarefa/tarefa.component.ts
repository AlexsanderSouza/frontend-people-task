import { Component, OnInit } from '@angular/core';

import { pessoa } from '../pessoas';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  pessoas: Array<pessoa>;

  constructor() {

    this.pessoas = [
      {nome: 'Alex', email: 'teste'},
      {nome: 'Geane', email: 'teste'},
  ];

   }

  ngOnInit() {
  }

}