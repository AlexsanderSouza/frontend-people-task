import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

  { path: 'tarefa', loadChildren:'app/tarefa/tarefa.module#TarefaModule' },
  { path: '', loadChildren: 'app/pessoa/pessoa.module#PessoaModule' },
  { path: 'alocacao', loadChildren: 'app/alocacao/alocacao.module#AlocacaoModule' },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {} 