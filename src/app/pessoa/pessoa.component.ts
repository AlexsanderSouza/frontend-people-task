import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { PessoasService } from './../services/pessoas.service';
import { Pessoa } from './../pessoa';

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
      nome: [null , Validators.required,],
      email: [null , [Validators.required, Validators.email]],
    });

    this.pessoas$ = this._pessoasService.pessoas$.asObservable();
  }

  ngOnInit() {
  }

  _adicionar() {
    if(this._form.invalid){return;}
    const pessoa: Pessoa = {
      ...this._form.value,
    };
    this._pessoasService.addPessoas(pessoa);
    this._form.reset();
  }

  _remove(pessoa: Pessoa){
    this._pessoasService.removePessoas(pessoa);
  }
}