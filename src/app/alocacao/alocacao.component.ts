import { Component, OnInit } from '@angular/core';

import { pessoa } from './../pessoas';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {
    pessoa:Array<pessoa> = [
      {nome: 'Alex', email: 'alex@gmail.com'},
      {nome: 'Geane', email: 'geane@gmail.com'}];
    
  constructor() {
    this.pessoa;
   }

  ngOnInit() {
  }

}