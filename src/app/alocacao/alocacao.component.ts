import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { AlocacaoService } from './../services/alocacao.service';
import { TarefaService } from './../services/tarefa.service';
import { PessoasService } from './../services/pessoas.service';

import { Pessoa } from '../pessoa';
import { Tarefa } from './../tarefa';
import { Alocacao } from './../alocacao';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {
  //controla o formulario do html
  _form: FormGroup;

  alocacaoP$: Observable<Pessoa[]>;
  alocacaoT$: Observable<Tarefa[]>;
  alocacao$: Observable<Alocacao[]>;

  constructor(private _fb: FormBuilder, private _pessoasService: PessoasService, private _tarefaService: TarefaService, private _alocacaoService: AlocacaoService) {
    this._form = this._fb.group({
      pessoa: ["", Validators.required],
      tarefa: ["", Validators.required],
    });

    this.alocacaoP$ = this._pessoasService.pessoas$.asObservable();
    this.alocacaoT$ = this._tarefaService.tarefas$.asObservable();
    this.alocacao$ = null;
    this._form.controls.tarefa.setValue("");

  }

  ngOnInit() {

  }
  //explode os valores do form e adiciona para o tipo alocacao
  _adicionar() {
    if (this._form.invalid) { return; }
    const alocacao: Alocacao = {
      ...this._form.value,  //... explodindo o objeto
    };
    this._alocacaoService.addAlocacao(alocacao);
    this._form.reset();
    this._form.controls.pessoa.setValue("");
    this._form.controls.tarefa.setValue("");
  }
  //chama a função de remover do service
  _remove(alocacao: Alocacao) {
    this._alocacaoService.removeAlocacao(alocacao);
  }
  // obtem as pessoas a serem inclusas na tabela devido a seleção de tarefa
  getPessoas() {
    this._alocacaoService.obtemTodasAsAlocacao(this._form.controls.tarefa.value.id);
    this.alocacao$ = this._alocacaoService.alocacao$.asObservable();
  }
}