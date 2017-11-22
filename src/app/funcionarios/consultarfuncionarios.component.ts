import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
declare var $;
  

@Component({
  templateUrl: 'consultarfuncionarios.component.html'
})

  export class ConsultarFuncionariosComponent implements OnInit { 
    dtOptions: DataTables.Settings = {};

    public funcionario: any={
        identificacion:  '',
        nombrefuncionario :  '',
        apellidos :  '',
        telefono : '',
        direccion :  '',
        email :  '',
        sexo :  '',
        
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
  
    constructor(private _http: Http){

    }
  

    ngOnInit(): void{
      setTimeout(function () {
        $(function () {
          $('#tablafuncionarios').DataTable();
          
        });
      },200);
     
     
      this.getAll();
  
      this.dtOptions = {
        pagingType: 'full_numbers'
      };
    
    }

   

      
 
    delete(id:number){

     

      this._http.delete(`${this.urlBase}/api/Funcionario/${id}`).map(res => res.json()).subscribe(
        result => {
          swal({
            position: 'center',
            type: 'success',
            title: 'Eliminado correctamente ',
            showConfirmButton: false,
            timer: 900
          })
            console.log(result);
            this.getAll();
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
      this._http.get(`${this.urlBase}/api/Funcionario/`).map(res => res.json()).subscribe(
        result => {
            this.funcionarios = result;
            console.log(this.funcionarios);
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

