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
export class AlocacaoComponent {

  /** controla o formulario do html */
  _form: FormGroup;

  /** recebe um Observable com todas as pessoas atualizadas */
  alocacaoP$: Observable<Pessoa[]>;

  /** recebe um Observable com todas as tarefas atualizadas */
  alocacaoT$: Observable<Tarefa[]>;

  /** recebe um Observable com todas as Alocacões atualizadas */
  alocacao$: Observable<Alocacao[]>;

  constructor(private _fb: FormBuilder, private _pessoasService: PessoasService, private _tarefaService: TarefaService, private _alocacaoService: AlocacaoService) {
    this._form = this._fb.group({
      pessoa: ["", Validators.required],
      tarefa: ["", Validators.required],
    });

    this.alocacaoP$ = this._pessoasService.pessoas$.asObservable();
    this.alocacaoT$ = this._tarefaService.tarefas$.asObservable();
    this.alocacao$ = null;
    this._form.controls.tarefa.setValue("AA"); // define select padrão
    this._form.controls.pessoa.setValue("AA")
  }

  /** explode os valores do form e adiciona para o tipo alocacao */
  _adicionar() {
    if (this._form.invalid) { return; }
    const alocacao: Alocacao = {
      ...this._form.value,  // ... explodindo o objeto 
    };
    this._alocacaoService.addAlocacao(alocacao);
    this._form.reset();
    this._form.controls.pessoa.setValue("AA");
    this._form.controls.tarefa.setValue("AA");
  }

  /** chama a função de remover do service */
  _remove(alocacao: Alocacao) {
    this._alocacaoService.removeAlocacao(alocacao);
  }

  /**  obtem as pessoas a serem inclusas na tabela devido a seleção de tarefa */
  getPessoas() {
    if(this._form.controls.tarefa.value != "AA"){
      this._alocacaoService.obtemTodasAsAlocacao(this._form.controls.tarefa.value.id);
      this.alocacao$ = this._alocacaoService.alocacao$.asObservable();
    }
  }
}