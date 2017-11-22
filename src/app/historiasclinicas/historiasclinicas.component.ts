import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';



@Component({
  templateUrl: 'historiasclinicas.component.html'
})
export class HistoriasClinicasComponent implements OnInit{
    dtOptions: DataTables.Settings = {};
    

  public especie: any={
      nombreespecie:  '',
      id:  '',


  } 
  public cliente: any={
      nombrecliente:  '',
      idcliente:  '',


  } 
 
  public raza: any={
    
    nombreraza:  '',
    idespecie:  '',


} 
  public mascota: any={
      idmascota:  '',
      nombremascota :  '',
      idcliente :  '',
      idespecie : '',
      nombreespecie : '',
      idraza :  '',
      email :  '',
      fechanac :  '',
      sexo :  '',
      foto :  '',
  }
 
  public historias: any={
    idmascota: '',
    idcita:  '',
    motivo:  '',
    diagnostico:  '',
    tratamiento:  '',
    tipoconsulta:  '',
    fechaconsulta:  '',


} 

      title:string = 'app';
      idmascota:  '';
      tipoconsulta:  '';
      fechaconsulta:  '';
      nombremascota :  '';
      nombrecliente :  '';
      nombrexidespecie :  '';
      idcliente :  '';
      idespecie : '';
      iddmascota : '';
      idraza :  '';
      email :  '';
      fechanac :  '';
      sexo :  '';
      foto :  '';
      idespecieespecie : '';
      nombreespecie =  '';
      idcita:  '';
      motivo:  '';
      diagnostico:  '';
      tratamiento:  '';
      historia = [];
      historiass = [];
      clientes = [];
      especies = [];
      mascotas = [];
      razas = [];
      errorMessage = '';
      mostrarhistorias = false;
  
      urlBase =  "http://localhost:8080";


  constructor( private _http: Http) { }

  ngOnInit(){
  
  }

  get1mascota(id:number){
    this.mascotas.length = 0;    
    console.log(this.mascotas.length);
    this._http.get(`${this.urlBase}/api/Mascota?idmascota=${id}`).map(res => res.json()).subscribe(
      result => {
         this.mostrarhistorias = true; 
          this.mascotas = result;
          if (this.mascotas.length==1) {
          console.log(this.mascotas);
                   
            

           // this.historias.iddmascota = this.mascota.idmascota;
            
          console.log('especie : '+this.mascotas.length);
                    
        }else{
        alert("Mascota no existe");
        this.mascotas.length = 0;
        
      }
            
              
      },
      error => {
          this.errorMessage = <any>error;
           
          if(this.errorMessage !== null){
              console.log(this.errorMessage);
              alert("Error en la petición");
          }
      }
    );
  
}


GetHistoria(id:number){
    console.log(id);
        this._http.get(`${this.urlBase}/api/Historia/${id}`).map(res => res.json()).subscribe(
          result => {
                  this.historia = result;
                  console.log(this.historia);
                  
                 
                  
                  
          },
          error => {
              this.errorMessage = <any>error;
               
              if(this.errorMessage !== null){
                  console.log(this.errorMessage);
                  alert("Error en la petición");
              }
          }
        );
      }


gethistorias(id:number){
    this.historiass.length = 0;    
    console.log(this.historiass.length);
    this._http.get(`${this.urlBase}/api/historia?idmascota=${id}`).map(res => res.json()).subscribe(
      result => {
          this.historiass = result;
          if (this.historiass.length>0) {
          console.log(this.historiass);
          this.mostrarhistorias = true; 
          setTimeout(function () {
            $(function () {
              $('#tablahistorias').DataTable();
              
            });
          },300);
         
                    
          this.dtOptions = {
            pagingType: 'full_numbers'
          };
        

           // this.historias.iddmascota = this.mascota.idmascota;
           
                    
        }else{
        alert("no hay nada");
        this.historiass.length = 0;
        
      }
            
              
      },
      error => {
          this.errorMessage = <any>error;
           
          if(this.errorMessage !== null){
              console.log(this.errorMessage);
              alert("Error en la petición");
          }
      }
    );
  
}


}
