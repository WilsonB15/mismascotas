import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarClientesComponent } from './registrarclientes.component';
import { ConsultarClientesComponent } from './consultarclientes.component';
import { ActualizarClientesComponent } from './actualizarclientes.component';
//import { MascotasComponent } from './mascotas.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Clientes'
    },
    children: [
      {
        path: 'registrar',
        component: RegistrarClientesComponent,
        data: {
          title: 'Registrar'
        }
      }, 
      {
        path: 'consultar',
        component: ConsultarClientesComponent,
        data: {
          title: 'Consultar'
        }
      },    {
        path: 'actualizar/:id',
        component: ActualizarClientesComponent,
        data: {
          title: 'Actualizar'
        }
      },   
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}
