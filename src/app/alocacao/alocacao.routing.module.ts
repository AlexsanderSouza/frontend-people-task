import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlocacaoComponent } from './alocacao.component';

const alocacaoRoutes = [

  { path: '', component: AlocacaoComponent }

];

@NgModule({

  imports: [RouterModule.forChild(alocacaoRoutes)],
  exports: [RouterModule]

})

export class AlocacaoRoutingModule {}