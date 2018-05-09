import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaComponent } from './pessoa.component';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PessoaRoutingModule,
  ],
  declarations: [PessoaComponent]
})
export class PessoaModule { }