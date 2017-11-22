import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
import 'rxjs/add/operator/catch';
  

@Component({
  templateUrl: 'registrarclientes.component.html'
})
  export class RegistrarClientesComponent { 
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
  
    constructor(private _http: Http){}



    create(){
          
      if ((this.cliente.idcliente == null) || (this.cliente.nombrecliente == "") || (this.cliente.apellidos == "") || (this.cliente.telefono == "") || (this.cliente.direccion == "") || (this.cliente.email == "") || (this.cliente.sexo == "") ) {

        swal({
          position: 'bottom',
          type: 'error',
          title: 'Complete todos los campos',
          showConfirmButton: false,
          timer: 600
        });
          
      }
      else {

        this._http.post(`${this.urlBase}/api/Cliente/`,this.cliente).map(res => res.json()).subscribe(
          result => {
            swal({
              position: 'center',
              type: 'success',
              title: 'Cliente registrado correctamente',
              showConfirmButton: true,
              
            });
              console.log(result);
          },
          error => {
             this.errorMessage = <any>error;
               
            
              if(this.errorMessage !== null){
                  console.log(this.errorMessage);
                alert(error._body);
               
              }
          }
        );
          
      }
      

  }
   



  log(){
    console.log('titulo : '+this.nombrecliente);
   
  }


}

