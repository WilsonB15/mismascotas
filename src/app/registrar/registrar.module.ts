import { NgModule } from '@angular/core';
//importar las pestanas que hay acá
import { ClientesComponent } from './clientes.component';
import { MascotasComponent } from './mascotas.component';
import { EspeciesComponent } from './especies.component';
import { RazasComponent } from './razas.component';

import { RegistrarRoutingModule } from './registrar-routing.module';
//h
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';






@NgModule({
  imports: [ RegistrarRoutingModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule ],
  declarations: [
    ClientesComponent,
    MascotasComponent,
    EspeciesComponent,
    RazasComponent,
    
  ]
})
export class RegistrarModule { }
