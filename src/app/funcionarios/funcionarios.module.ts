import { NgModule } from '@angular/core';
//importar las pestanas que hay acá
import { RegistrarFuncionariosComponent } from './registrarfuncionarios.component';
import { ConsultarFuncionariosComponent } from './consultarfuncionarios.component';
import { ActualizarFuncionariosComponent } from './actualizarfuncionarios.component';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';

//dtatables
import { DataTablesModule } from 'angular-datatables';
//import { BrowserModule } from '@angular/platform-browser';


import { FuncionariosRoutingModule } from './funcionarios-routing.module';
//h
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';







@NgModule({
  imports: [ FuncionariosRoutingModule,
    ModalModule.forRoot(),
    CommonModule,
    HttpModule,
    RouterModule, 
    FormsModule,
    //BrowserModule,
    DataTablesModule,
    ReactiveFormsModule ],
  declarations: [
    RegistrarFuncionariosComponent,
    ConsultarFuncionariosComponent,
    ActualizarFuncionariosComponent,

    
  ]
})
export class FuncionariosModule { }
