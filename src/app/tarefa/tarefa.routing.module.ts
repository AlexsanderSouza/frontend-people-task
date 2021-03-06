import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TarefaComponent } from './tarefa.component';

const tarefaRoutes = [

  { path: '', component: TarefaComponent }
  
];

@NgModule({
  
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(tarefaRoutes)
  ],
  exports: [RouterModule] 

})

export class TarefaRoutingModule {}