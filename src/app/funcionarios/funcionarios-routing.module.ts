import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarFuncionariosComponent } from './registrarfuncionarios.component';
import { ConsultarFuncionariosComponent } from './consultarfuncionarios.component';
import { ActualizarFuncionariosComponent } from './actualizarfuncionarios.component';
//import { MascotasComponent } from './mascotas.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Funcionarios'
    },
    children: [
      {
        path: 'registrar',
        component: RegistrarFuncionariosComponent,
        data: {
          title: 'Registrar'
        }
      }, 
      {
        path: 'consultar',
        component: ConsultarFuncionariosComponent,
        data: {
          title: 'Consultar'
        }
      },
      {  
      path: 'actualizar/:id',
      component: ActualizarFuncionariosComponent,
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
export class FuncionariosRoutingModule {}
