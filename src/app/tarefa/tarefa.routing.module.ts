import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TarefaComponent } from './tarefa.component';
import { ReactiveFormsModule } from '@angular/forms';

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