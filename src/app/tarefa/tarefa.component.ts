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
export class TarefaComponent implements OnInit {
  _form: FormGroup;
  tarefas$: Observable<Tarefa[]>;
  _edit: boolean = false;

  constructor(private fb: FormBuilder, private _tarefaService: TarefaService) {
    this._form = this.fb.group({
      id: [null],
      titulo: ["", Validators.required],
      descricao: ["", [Validators.required, Validators.minLength(1)]],
      dtIni: ["", Validators.required],
      dtFim: ["", Validators.required],
    });

    this.tarefas$ = this._tarefaService.tarefas$.asObservable();
  }

  ngOnInit() {
  }

  _adicionar(form: FormGroupDirective) {
    if(this._form.invalid){return;}
    const tarefa: Tarefa = {
      ...this._form.value,
    };
    this._tarefaService.addTarefas(tarefa);
    form.resetForm();
    this._edit = false;
  }

  _editar(tarefa: Tarefa){
    this._edit = true;
    this._form.controls['id'].setValue(tarefa.id);
    this._form.controls['titulo'].setValue(tarefa.titulo);
    this._form.controls['descricao'].setValue(tarefa.descricao);
    this._form.controls['dtIni'].setValue(tarefa.dtIni);
    this._form.controls['dtFim'].setValue(tarefa.dtFim);
  }
  
  _remove(tarefa: Tarefa){
    this._tarefaService.removeTarefas(tarefa);
  }

}