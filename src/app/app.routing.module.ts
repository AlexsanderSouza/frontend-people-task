import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PessoaComponent } from './pessoa/pessoa.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { HomeComponent } from './home/home.component';
import { AlocacaoComponent } from './alocacao/alocacao.component';

const appRoutes: Routes = [

  { path: 'tarefa', loadChildren:'app/tarefa/tarefa.module#TarefaModule' },
  { path: 'pessoa', loadChildren: 'app/pessoa/pessoa.module#PessoaModule' },
  { path: 'alocacao', loadChildren: 'app/alocacao/alocacao.module#AlocacaoModule' },
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {} 