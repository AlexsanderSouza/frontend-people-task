import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlocacaoComponent } from './alocacao.component';
import { AlocacaoRoutingModule } from './alocacao.routing.module'

@NgModule({

  imports: [
    CommonModule,
    AlocacaoRoutingModule,
  ],
  declarations: [AlocacaoComponent]  

})


export class AlocacaoModule {

}