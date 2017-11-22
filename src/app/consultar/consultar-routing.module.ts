import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { MascotasComponent } from './mascotas.component';
import { EspeciesComponent } from './especies.component';
import { RazasComponent } from './razas.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Consultar'
    },
    children: [
      {
        path: 'clientes',
        component: ClientesComponent,
        data: {
          title: 'Clientes'
        }
      },
      {
        path: 'especies',
        component: EspeciesComponent,
        data: {
          title: 'Especies'
        }
      },
      {
        path: 'razas',
        component: RazasComponent,
        data: {
          title: 'Razas'
        }
      },
      {
        path: 'mascotas',
        component: MascotasComponent,
        data: {
          title: 'Mascotas'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultarRoutingModule {}
