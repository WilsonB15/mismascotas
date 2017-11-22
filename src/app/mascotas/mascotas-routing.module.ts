import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarMascotasComponent } from './registrarmascotas.component';
import { ConsultarMascotasComponent } from './consultarmascotas.component';
import { ActualizarMascotasComponent } from './actualizarmascotas.component';

//import { MascotasComponent } from './mascotas.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Mascotas'
    },
    children: [
      {
        path: 'registrar',
        component: RegistrarMascotasComponent,
        data: {
          title: 'Registrar'
        }
      }, 
      {
        path: 'consultar',
        component: ConsultarMascotasComponent,
        data: {
          title: 'Consultar'
        }
      },  
      {  
        path: 'actualizar/:id',
        component: ActualizarMascotasComponent,
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
export class MascotasRoutingModule {}
