import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { HistoriasClinicasComponent } from './historiasclinicas.component';

const routes: Routes = [
  {
    path: '',
    component: HistoriasClinicasComponent,
    data: {
      title: 'HistoriasClinicas'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriasClinicasRoutingModule {}
