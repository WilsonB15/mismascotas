import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ConsultaMedicaComponent } from './consultamedica.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaMedicaComponent,
    data: {
      title: 'ConsultaMedica'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaMedicaRoutingModule {}
