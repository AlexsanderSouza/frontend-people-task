import { PessoasService } from './services/pessoas.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

//import { TarefaModule } from './tarefa/tarefa.module';
//import { PessoaModule } from './pessoa/pessoa.module';
//import { AlocacaoModule } from './alocacao/alocacao.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';


@NgModule({
  imports:   [
  BrowserModule, 
  FormsModule, 
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
    PessoasService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
