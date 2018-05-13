import { PessoasService } from './../services/pessoas.service';

import {Observable} from 'rxjs/Observable';

import { Pessoa } from './../pessoa';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  _form: FormGroup;
  pessoas$: Observable<Pessoa[]>;

  constructor(private _fb: FormBuilder, private _pessoasService: PessoasService) {
    this._form = this._fb.group({
      nome: ['', Validators.required],
      email: [''],
    });

    this.pessoas$ = this._pessoasService.pessoas$.asObservable();
  }

  ngOnInit() {
  }

  AddListaPessoas(){
  }

  _adicionar() {
    const pessoa: Pessoa = {
      ...this._form.value,
    };

    this._pessoasService.addPessoas(pessoa);
  }
}