import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
  

@Component({
  templateUrl: 'actualizarfuncionarios.component.html'
})
  export class ActualizarFuncionariosComponent { 
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
      private route: ActivatedRoute,
      private location: Location){}
    
    
      ngOnInit(){
        this.funcionario.id = +this.route.snapshot.params['id'];

        console.log('titulo : '+this.funcionario.id);
        this.getOne(this.funcionario.id);

      }

      getOne(id:number){
        console.log('get one');
        this._http.get(`${this.urlBase}/api/Funcionario/${id}`).map(res => res.json()).subscribe(
          result => {
                  this.funcionario = result;
                  console.log(this.funcionario);
                  
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
        
        this._http.put(`${this.urlBase}/api/Funcionario/${id}`,this.funcionario).map(res => res.json()).subscribe(
          result => {
              
      swal({
        position: 'center',
        type: 'success',
        title: 'Funcionario actualizado correctamente',
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

    

    console.log('titulo : '+this.nombrefuncionario);
   
  }


}

