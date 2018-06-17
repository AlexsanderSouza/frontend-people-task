import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AlocacaoService } from './services/alocacao.service';
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'angular2-materialize';
//import { TarefaModule } from './tarefa/tarefa.module';
//import { PessoaModule } from './pessoa/pessoa.module';
//import { AlocacaoModule } from './alocacao/alocacao.module';
import { AppComponent } from './app.component';
import { TarefaService } from './services/tarefa.service';
import { PessoasService } from './services/pessoas.service';

//import { HomeComponent } from './home/home.component';


@NgModule({
  imports:   [
  HttpClientModule,
  BrowserModule, 
  FormsModule, 
  MaterializeModule,
  AppRoutingModule,
  //TarefaModule,
  //PessoaModule,
  //AlocacaoModule, 
  ],

  declarations: [
     AppComponent,  
     //HomeComponent,
  ],
  providers: [
    PessoasService,TarefaService,AlocacaoService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
