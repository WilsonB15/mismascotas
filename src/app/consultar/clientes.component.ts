import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
  

@Component({
  templateUrl: 'clientes.component.html'
})
  export class ClientesComponent implements OnInit { 
    public cliente: any={
        identificacion:  '',
        nombrecliente :  '',
        apellidos :  '',
        telefono : '',
        direccion :  '',
        email :  '',
        sexo :  '',
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
  
    constructor(private _http: Http){}
   
    ngOnInit(){
      this.getAll();
     // this.delete();
    }

    delete(id:number){
      this._http.delete(`${this.urlBase}/api/Cliente/${id}`).map(res => res.json()).subscribe(
        result => {
            //alert("Contacto eliminado");
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

  
    getAll(){
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


  log(){
    console.log('titulo : '+this.nombrecliente);
   
  }


}

