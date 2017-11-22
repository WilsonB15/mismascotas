import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
  

@Component({
  templateUrl: 'actualizarclientes.component.html'
})
  export class ActualizarClientesComponent { 
    public cliente: any={
        identificacion:  '',
        nombrecliente :  '',
        apellidos :  '',
        telefono : '',
        direccion :  '',
        email :  '',
        sexo :  'M',
    } 

    title:string = 'app';
    identificacion =  '';
    nombrecliente =  '';
    apellidos =  '';
    telefono = '';
    direccion =  '';
    email =  '';
    sexo :  '';
    clientes = [];
    errorMessage = '';
  
    urlBase =  "http://localhost:8080";
  
    constructor(private _http: Http,
      private route: ActivatedRoute,
      private location: Location){}

    ngOnInit(){
      this.cliente.id = +this.route.snapshot.params['id'];

      console.log('titulo : '+this.cliente.id);
      this.getOne(this.cliente.id);

    }

    getOne(id:number){
      console.log('get one');
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

    goBack(): void{
      this.location.back();
  }


    
    update(id:number){
      
      this._http.put(`${this.urlBase}/api/Cliente/${id}`,this.cliente).map(res => res.json()).subscribe(
        result => {
            
    swal({
      position: 'center',
      type: 'success',
      title: 'Cliente actualizado correctamente',
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
    console.log('titulo : '+this.nombrecliente);
   
  }


}

