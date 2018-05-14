import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PessoaComponent } from './pessoa.component';

const pessoaRoutes = [

  { path:'', component: PessoaComponent }

];

@NgModule({
  
  imports: [RouterModule.forChild(pessoaRoutes)],
  exports: [RouterModule] 

})

export class PessoaRoutingModule {}