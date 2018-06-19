import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { TarefaService } from './../services/tarefa.service';

import { Tarefa } from '../tarefa';



@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  /** controla o formulario do html */
  _form: FormGroup;

  /** recebe um Observable com todas as tarefas atualizadas */
  tarefas$: Observable<Tarefa[]>;
  
  /** controla a visualização de botões de gravar e edição */
  _edit: boolean = false;

  constructor(private fb: FormBuilder, private _tarefaService: TarefaService) {
    this._form = this.fb.group({
      id: null,
      titulo: ["", Validators.required],
      descricao: ["", [Validators.required, Validators.minLength(1)]],
      dtIni: ["", Validators.required],
      dtFim: ["", Validators.required],
    });

    this.tarefas$ = this._tarefaService.tarefas$.asObservable();
  }

  /** explode os valores do form e adiciona para o tipo tarefa */
  _adicionar(form: FormGroupDirective) {
    if (this._form.invalid) { return; }
    const tarefa: Tarefa = {
      ...this._form.value,
    };
    this._tarefaService.addTarefas(tarefa);
    form.resetForm();
    this._edit = false;
  }

  /** edita o dado selecionado na tabela */
  _editar(tarefa: Tarefa) {
    this._edit = true;
    this._form.controls['id'].setValue(tarefa.id);
    this._form.controls['titulo'].setValue(tarefa.titulo);
    this._form.controls['descricao'].setValue(tarefa.descricao);
    this._form.controls['dtIni'].setValue(tarefa.dtIni);
    this._form.controls['dtFim'].setValue(tarefa.dtFim);
  }

  /** chama a função de remover do service */
  _remove(tarefa: Tarefa) {
    this._tarefaService.removeTarefas(tarefa);
  }

  /** cancela uma edição do dado selecionado para edição */
  _cancelar(f: FormGroupDirective) {
    this._edit = false;
    f.resetForm();
  }

}