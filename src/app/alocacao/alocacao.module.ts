import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AlocacaoRoutingModule } from './alocacao.routing.module'

import { AlocacaoComponent } from './alocacao.component';

@NgModule({
  imports: [
    CommonModule,
    AlocacaoRoutingModule, ReactiveFormsModule
  ],
  declarations: [AlocacaoComponent]  

})

export class AlocacaoModule {

}