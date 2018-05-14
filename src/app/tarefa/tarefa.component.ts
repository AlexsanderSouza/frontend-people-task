import { Tarefa } from '../tarefa';
import { Pessoa } from '../pessoa';
import { PessoasService } from './../services/pessoas.service';
import { TarefaService } from './../services/tarefa.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  _form: FormGroup;
  tarefas$: Observable<Tarefa[]>;

  constructor(private fb: FormBuilder, private _tarefaService: TarefaService) {
    this._form = this.fb.group({
      titulo: ["", Validators.required],
      descricao: [""],
      dtIni: [""],
      dtFim: [""],
    });

    this.tarefas$ = this._tarefaService.tarefas$.asObservable();
  }

  ngOnInit() {
  }

  _adicionar() {
    const tarefa: Tarefa = {
      ...this._form.value,
    };

    this._tarefaService.addTarefas(tarefa);
  }

}