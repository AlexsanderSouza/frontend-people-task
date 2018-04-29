import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

import { pessoa } from './../pessoas';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {
    pessoas:Array<pessoa>;
    selectedPessoa:pessoa;
  constructor() {
    this.pessoas = [
      {nome: 'Alex', email: 'alex@gmail.com'},
      {nome: 'Geane', email: 'geane@gmail.com'}
      ]
   }

  ngOnInit() {
  }

}