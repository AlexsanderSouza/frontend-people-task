import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TarefaComponent } from './tarefa.component';

const tarefaRoutes = [

  { path: '', component: TarefaComponent }

];

@NgModule({
  
  imports: [RouterModule.forChild(tarefaRoutes)],
  exports: [RouterModule] 

})

export class TarefaRoutingModule {}