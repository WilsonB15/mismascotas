import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      

      {
        path: 'clientes',
        loadChildren: './clientes/clientes.module#ClientesModule'
      },
      {
        path: 'mascotas',
        loadChildren: './mascotas/mascotas.module#MascotasModule'
      },
      {
        path: 'registrar',
        loadChildren: './registrar/registrar.module#RegistrarModule'
      },
      {
        path: 'consultar',
        loadChildren: './consultar/consultar.module#ConsultarModule'
      },
      {
        path: 'funcionarios',
        loadChildren: './funcionarios/funcionarios.module#FuncionariosModule'
      },
      {
        path: 'consultamedica',
        loadChildren: './consultamedica/consultamedica.module#ConsultaMedicaModule'
      },
      {
        path: 'historiasclinicas',
        loadChildren: './historiasclinicas/historiasclinicas.module#HistoriasClinicasModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
