import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pessoa } from '../pessoa';
import { Observable } from 'rxjs/Observable';
import { Tarefa } from './../tarefa';
import { Alocacao } from './../alocacao';
import { AlocacaoService } from './../services/alocacao.service';
import { TarefaService } from './../services/tarefa.service';
import { PessoasService } from './../services/pessoas.service';

@Component({
  selector: 'app-alocacao',
  templateUrl: './alocacao.component.html',
  styleUrls: ['./alocacao.component.css']
})
export class AlocacaoComponent implements OnInit {
    _form: FormGroup;
    alocacaoP$: Observable<Pessoa[]>;
    alocacaoT$: Observable<Tarefa[]>;
    alocacao$: Observable<Alocacao[]>;

  constructor(private _fb: FormBuilder,private _pessoasService: PessoasService, private _tarefaService: TarefaService,private _alocacaoService: AlocacaoService) {
    this._form = this._fb.group({
      nome: ['',Validators.required],
      titulo: ['',Validators.required],
    });

    this.alocacaoP$ = this._pessoasService.pessoas$.asObservable();
    this.alocacaoT$ = this._tarefaService.tarefas$.asObservable();
    this.alocacao$ = this._alocacaoService.alocacao$.asObservable();

   }

  ngOnInit() {
  }

  _adicionar(){
    if(this._form.invalid) {return;}
    const alocacao: Alocacao = {
      ...this._form.value,
    };
    this._alocacaoService.addAlocacao(alocacao);
    this._form.controls.nome.setValue("");
    this._form.controls.titulo.setValue("");
  }

  _remove(alocacao: Alocacao){
    this._alocacaoService.removeAlocacao(alocacao);
  }

}