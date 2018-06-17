import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { TarefaService } from './services/tarefa.service';
import { PessoasService } from './services/pessoas.service';
import { AlocacaoService } from './services/alocacao.service';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';




@NgModule({
  imports:   [
  HttpClientModule,
  BrowserModule, 
  FormsModule, 
  MaterializeModule,
  AppRoutingModule,
  ],

  declarations: [
     AppComponent,
  ],
  providers: [
    PessoasService,TarefaService,AlocacaoService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
