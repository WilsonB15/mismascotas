import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
  

@Component({
  templateUrl: 'razas.component.html'
})
  export class RazasComponent implements OnInit{ 
    public raza: any={
        nombreraza:  '',
        idespecie:  '',
       
        


    } 
    public especie: any={
      nombreespecie:  '',
      id:  '',
      


  } 

    title:string = 'app';
    nombreraza =  '';
    nombreespecie = '';
    idespecie:  '';
    razas = [];
    especies = [];
    errorMessage = '';
  
    urlBase =  "http://localhost:8080";
  
    constructor(private _http: Http){}

    ngOnInit(){
      this.getAll();
     
    }

    getAll(){
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
   



  create(){
    
    this._http.post(`${this.urlBase}/api/Raza/`,this.raza).map(res => res.json()).subscribe(
      result => {
          alert("Raza registrado correctamente");
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
    console.log('titulo : '+this.nombreraza);
   
  }


}

