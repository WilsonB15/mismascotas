import { NgModule } from '@angular/core';
//importar las pestanas que hay acá
import { RegistrarClientesComponent } from './registrarclientes.component';
import { ConsultarClientesComponent } from './consultarclientes.component';
import { ActualizarClientesComponent } from './actualizarclientes.component';
import { DataTablesModule } from 'angular-datatables';


import { ClientesRoutingModule } from './clientes-routing.module';
//h
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';






@NgModule({
  imports: [ ClientesRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule ],
  declarations: [
    RegistrarClientesComponent,
    ConsultarClientesComponent,
    ActualizarClientesComponent,

    
  ]
})
export class ClientesModule { }
