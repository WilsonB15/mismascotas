import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ConsultaMedicaComponent } from './consultamedica.component';
import { ConsultaMedicaRoutingModule } from './consultamedica-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';



@NgModule({
  imports: [
    ConsultaMedicaRoutingModule,
    ChartsModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    RouterModule,
    DataTablesModule,     
    ReactiveFormsModule 
  ],
  declarations: [ ConsultaMedicaComponent ]
})
export class ConsultaMedicaModule { }
