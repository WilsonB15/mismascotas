import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HistoriasClinicasComponent } from './historiasclinicas.component';
import { HistoriasClinicasRoutingModule } from './historiasclinicas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';



@NgModule({
  imports: [
    HistoriasClinicasRoutingModule,
    ChartsModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot(),    
    RouterModule,
    DataTablesModule,     
    ReactiveFormsModule 
  ],
  declarations: [ HistoriasClinicasComponent ]
})
export class HistoriasClinicasModule { }
