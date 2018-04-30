import { Component, OnInit } from '@angular/core';

import { pessoa } from './../pessoas';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  pessoas: Array<pessoa>;

  constructor() {

    this.pessoas = [
      {nome: 'Alex', email: 'alex@gmail.com'},
      {nome: 'Geane', email: 'geane@gmail.com'},
  ];

   }

  ngOnInit() {
  }

}