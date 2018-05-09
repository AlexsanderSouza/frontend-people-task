import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

import { Pessoa } from './../pessoa';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {
    pessoas:Array<Pessoa>;
    selectedPessoa:Pessoa;
  constructor() {
    this.pessoas = [
      {nome: 'Alex', email: 'alex@gmail.com'},
      {nome: 'Geane', email: 'geane@gmail.com'}
      ]
   }

  ngOnInit() {
  }

}