import { NgModule } from '@angular/core';
//importar las pestanas que hay acá
import { RegistrarMascotasComponent } from './registrarmascotas.component';
import { ConsultarMascotasComponent } from './consultarmascotas.component';
import { ActualizarMascotasComponent } from './actualizarmascotas.component';

import { DataTablesModule } from 'angular-datatables';


import { MascotasRoutingModule } from './mascotas-routing.module';
//h
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';






@NgModule({
  imports: [ MascotasRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
    DataTablesModule,     
    ReactiveFormsModule ],
  declarations: [
    RegistrarMascotasComponent,
    ConsultarMascotasComponent,
    ActualizarMascotasComponent,

    
  ]
})
export class MascotasModule { }
