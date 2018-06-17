import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

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
  _edit: boolean = false;

  constructor(private _fb: FormBuilder, private _pessoasService: PessoasService) {
    this._form = this._fb.group({
      id: [null ],
      nome: [null , Validators.required,],
      email: [null , [Validators.required, Validators.email]],
    });

    this.pessoas$ = this._pessoasService.pessoas$.asObservable();
    
  }

  ngOnInit() {
  }

  _adicionar(form: FormGroupDirective) {
    if(this._form.invalid){return;}
    const pessoa: Pessoa = {
      ...this._form.value,
    };
    this._pessoasService.addPessoas(pessoa);
    form.resetForm();
    this._edit=false;
  }

  _editar(pessoa: Pessoa){
    this._edit = true;
    this._form.controls['id'].setValue(pessoa.id);
    this._form.controls['nome'].setValue(pessoa.nome);
    this._form.controls['email'].setValue(pessoa.email);
  }

  _remove(pessoa: Pessoa){
    this._pessoasService.removePessoas(pessoa);
  }
}