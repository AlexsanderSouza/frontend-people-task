import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa.routing.module';

import { PessoaComponent } from './pessoa.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PessoaRoutingModule,
  ],
  declarations: [PessoaComponent]
})
export class PessoaModule { }