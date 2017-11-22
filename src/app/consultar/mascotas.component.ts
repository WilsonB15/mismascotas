import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
  

@Component({

    
  templateUrl: 'mascotas.component.html'
})
export class MascotasComponent implements OnInit{ 
    public especie: any={
        nombreespecie:  '',
        idespecieespecie:  '',


    } 
    public cliente: any={
        nombrecliente:  '',
        idcliente:  '',


    } 
    public mascota: any={
        idmascota:  '',
        nombremascota :  '',
        idcliente :  '',
        idespecie : '',
        idraza :  '',
        email :  '',
        fechanac :  '',
        sexo :  '',
        foto :  '',
    } 

        title:string = 'app';
        idmascota:  '';
        nombremascota :  '';
        nombrecliente :  '';
        nombrexidespecie :  '';
        idcliente :  '';
        idespecie : '';
        idraza :  '';
        email :  '';
        fechanac :  '';
        sexo :  '';
        foto :  '';
        idespecieespecie : '';
        nombreespecie =  '';
        clientes = [];
        especies = [];
        mascotas = [];
        errorMessage = '';
    
        urlBase =  "http://localhost:8080";

    
        constructor(private _http: Http){}

    ngOnInit(){
        this.getAllEspecies();
        this.getAllClientes();
        this.getAllMascotas();
        
       
      }
  
    getAllEspecies(){
      this._http.get(`${this.urlBase}/api/Especie/`).map(res => res.json()).subscribe(
        result => {
            this.especies = result;
            console.log(this.especies);
            
            
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

    getAllMascotas(){
        this._http.get(`${this.urlBase}/api/Mascota/`).map(res => res.json()).subscribe(
          result => {
              this.mascotas = result;
              console.log(this.mascotas);
              //this.getOne(this.mascota.idespecie);
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
    getAllClientes(){
        this._http.get(`${this.urlBase}/api/Cliente/`).map(res => res.json()).subscribe(
          result => {
              this.clientes = result;
              console.log(this.clientes);
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
      //

      getOne(id:number){
        console.log('get one');
        this._http.get(`${this.urlBase}/api/Especie/${id}`).map(res => res.json()).subscribe(
          result => {
                  this.especie = result;
                  console.log(this.especie);
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
     
   //
    create(){
         
      this._http.post(`${this.urlBase}/api/Mascota/`,this.mascota).map(res => res.json()).subscribe(
        result => {
            alert("Mascota creado");
            console.log(result);
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
  
    
  
    log(){
      console.log('titulo : '+this.nombremascota);
     
    }
  
  
}
