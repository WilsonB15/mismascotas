import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
declare var $;
  

@Component({
  templateUrl: 'consultarclientes.component.html'
})
  export class ConsultarClientesComponent implements OnInit { 
    dtOptions: DataTables.Settings = {};
    
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
      setTimeout(function () {
        $(function () {
          $('#tablaclientes').DataTable({
            language: {
              sSearch: 'Buscar: ',
              oPaginate: {
                 sNext: '<i class="fa fa-forward"></i>',
                 sPrevious: '<i class="fa fa-backward"></i>',
                 sFirst: '<i class="fa fa-step-backward"></i>',
                 sLast: '<i class="fa fa-step-forward"></i>',
                 
              }
            }  } 
          );
          
        });
      },200);
     
      this.getAll();
     // this.delete();
     this.dtOptions = {
      pagingType: 'simple_numbers',
    
    };
    }

    delete(id:number){

     

      this._http.delete(`${this.urlBase}/api/Cliente/${id}`).map(res => res.json()).subscribe(
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

