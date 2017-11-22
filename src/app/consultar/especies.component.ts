import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
  

@Component({
  templateUrl: 'especies.component.html'
})
  export class EspeciesComponent { 
    public especie: any={
        nombreespecie:  '',


    } 

    title:string = 'app';
    nombreespecie =  '';
    especies = [];
    errorMessage = '';
  
    urlBase =  "http://localhost:8080";
  
    constructor(private _http: Http){}
   



  create(){
    
    this._http.post(`${this.urlBase}/api/Especie/`,this.especie).map(res => res.json()).subscribe(
      result => {
          alert("Especie registrado correctamente");
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
    console.log('titulo : '+this.nombreespecie);
   
  }


}

