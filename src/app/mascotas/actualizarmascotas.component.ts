import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
  

@Component({

    
  templateUrl: 'actualizarmascotas.component.html'
  
})
export class ActualizarMascotasComponent implements OnInit{ 
    public especie: any={
        nombreespecie:  '',
        idespecieespecie:  '',


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
        idraza :  '',
        email :  '',
        fechanac :  '2017-10-24',
        sexo :  'M',
        foto :  '',
    } 
    title:string = 'app';
    idmascota:  '';
    nombremascota :  '';
    nombrecliente :  '';
    idcliente :  '';
    idespecie : '';
    idraza :  '';
    email :  '';
    fechanac :  '';
    sexo :  '';
    foto :  '';
    ididespecie :  '';
    nombreraza :  '';
    idespecieespecie : '';
    nombreespecie =  '';
    clientes = [];
    especies = [];
    mascotas = [];
    razas = [];
    errorMessage = '';
    
        urlBase =  "http://localhost:8080";

        filesToUpload: Array<File>;

        constructor(private _http: Http, 
            private route: ActivatedRoute,
            private location: Location ){ this.filesToUpload = []; }

    ngOnInit(){
        this.getAllEspecies();
        this.getAllClientes();
        this.mascota.id = +this.route.snapshot.params['id'];
        this.getOneMascota(this.mascota.id);
        
       
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
      getOneMascota(id:number){
        this._http.get(`${this.urlBase}/api/Mascota/${id}`).map(res => res.json()).subscribe(
          result => {
                  this.mascota = result;
                  console.log(this.mascota);
                  this.getRazasxEspecie(this.mascota.idespecie);
                  console.log('initidespecie : '+this.mascota.idespecie);
                  
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
      getRazasxEspecie(id:number){
        console.log('Hola');
        this._http.get(`${this.urlBase}/api/Raza?idespecie=${id}`).map(res => res.json()).subscribe(
          result => {
                  this.razas = result;
                  console.log(this.razas);

                  console.log('especie : '+this.razas);
                  
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
  
      goBack(): void{
        this.location.back();
    }


      
      update(id:number){
        
        this._http.put(`${this.urlBase}/api/Mascota/${id}`,this.mascota).map(res => res.json()).subscribe(
          result => {
              
      swal({
        position: 'center',
        type: 'success',
        title: 'Mascota actualizado correctamente',
        showConfirmButton: true,
        
      });
              console.log(result);
              this.goBack();
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
