import { Router } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
import { findIndex } from 'rxjs/operator/findIndex';
import { log } from 'util';
import { Alert } from 'selenium-webdriver';




@Component({
  templateUrl: 'consultamedica.component.html'
})
export class ConsultaMedicaComponent implements OnInit{

    ngOnInit(): void {
        
  
    console.log(this.fecha);

    
    
     
    
   
  
    }
    fecha = new Date().toISOString().slice(0,10);
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
    idcita:  '0',
    motivo:  '',
    diagnostico:  '',
    tratamiento:  '',
    tipoconsulta:  '',
    fechaconsulta:  this.fecha,


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
      historiass = [];
      clientes = [];
      especies = [];
      mascotas = [];
      razas = [];
      errorMessage = '';
  
      urlBase =  "http://localhost:8080";
   
     
      
     


  constructor( private _http: Http) { }

 
 
getOneRaza(id:number){
    console.log(id);
        this._http.get(`${this.urlBase}/api/Raza/${id}`).map(res => res.json()).subscribe(
          result => {
                  this.raza = result;
                  console.log(this.raza);
                  
                  console.log('initidespecie : '+this.raza.nombreraza);
                  
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
      getOneCliente(id:number){
        console.log(id);
            this._http.get(`${this.urlBase}/api/Cliente/${id}`).map(res => res.json()).subscribe(
              result => {
                      this.cliente = result;
                      console.log(this.cliente);
                      
                      
                      
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
      getOneEspecie(id:number){
        console.log(id);
            this._http.get(`${this.urlBase}/api/Especie/${id}`).map(res => res.json()).subscribe(
              result => {
                      this.especie = result;
                      console.log(this.especie);
                      
                      console.log('initidespecie : '+this.especie.nombreespecie);
                      
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
  get1mascota(id:number){
    this.mascotas.length = 0;    
    console.log(this.mascotas.length);
    this._http.get(`${this.urlBase}/api/Mascota?idmascota=${id}`).map(res => res.json()).subscribe(
      result => {
          

          this.mascotas = result;
          if (this.mascotas.length==1) {
          console.log(this.mascotas);
          
          
            this.getOneRaza(this.mascotas[0].idraza);
            this.getOneEspecie(this.mascotas[0].idespecie);
            this.getOneCliente(this.mascotas[0].idcliente);
            

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
     
  
}
}


}
