import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefaRoutingModule } from './tarefa.routing.module';

import { TarefaComponent } from './tarefa.component';

@NgModule({
  imports: [
    CommonModule,
    TarefaRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TarefaComponent]
})
export class TarefaModule { }