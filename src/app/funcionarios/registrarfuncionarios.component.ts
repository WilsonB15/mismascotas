import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
import { Location } from '@angular/common';
  

@Component({
  templateUrl: 'registrarfuncionarios.component.html'
})
  export class RegistrarFuncionariosComponent { 
    public funcionario: any={
        identificacion:  '',
        nombrefuncionario :  '',
        apellidos :  '',
        telefono : '',
        direccion :  '',
        email :  '',
        sexo :  'M',
    } 

    title:string = 'app';
    identificacion =  '';
    nombrefuncionario =  '';
    apellidos =  '';
    telefono = '';
    direccion =  '';
    email =  '';
    sexo :  '';
    funcionarios = [];
    errorMessage = '';
  
    urlBase =  "http://localhost:8080";
  
    constructor(private _http: Http,
      private location: Location){}

      goBack(): void{
        this.location.back();
    }



    create(){
          
      if ((this.funcionario.idfuncionario == null) || (this.funcionario.nombrefuncionario == "") || (this.funcionario.apellidos == "") || (this.funcionario.telefono == "") || (this.funcionario.direccion == "") || (this.funcionario.email == "") || (this.funcionario.sexo == "") ) {

        swal({
          position: 'bottom',
          type: 'error',
          title: 'Complete todos los campos',
          showConfirmButton: false,
          timer: 600
        });
          
      }
      else {

        this._http.post(`${this.urlBase}/api/Funcionario/`,this.funcionario).map(res => res.json()).subscribe(
          result => {
            swal({
              position: 'center',
              type: 'success',
              title: 'Funcionario registrado correctamente',
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
    console.log('titulo : '+this.nombrefuncionario);
   
  }


}

