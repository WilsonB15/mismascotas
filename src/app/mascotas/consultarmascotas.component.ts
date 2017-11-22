import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
declare var $;
  

@Component({

    
  templateUrl: 'consultarmascotas.component.html'
})
export class ConsultarMascotasComponent implements OnInit{ 
    dtOptions: DataTables.Settings = {};
    public especie: any={
        nombreespecie:  '',
        id:  '',


    } 
    public cliente: any={
        nombrecliente:  '',
        idcliente:  '',


    } 
    public mascota: any={
        idmascota:  '',
        nombremascota :  '',
        idcliente :  '',
        idespecie : '',
        nombreespecie : '',
        idraza :  '',
        email :  '',
        fechanac :  '',
        sexo :  '',
        foto :  '',
    } 

        title:string = 'app';
        idmascota:  '';
        nombremascota :  '';
        nombrecliente :  '';
        nombrexidespecie :  '';
        idcliente :  '';
        idespecie : '';
        idraza :  '';
        email :  '';
        fechanac :  '';
        sexo :  '';
        foto :  '';
        idespecieespecie : '';
        nombreespecie =  '';
        clientes = [];
        especies = [];
        mascotas = [];
        errorMessage = '';
    
        urlBase =  "http://localhost:8080";

    
        constructor(private _http: Http){}

    ngOnInit(){
        setTimeout(function () {
            $(function () {
              $('#tablafuncionarios').DataTable();
              
            });
          },200);
        
          this.dtOptions = {
            pagingType: 'full_numbers'
          };
        
        //this.getAllEspecies();
        //this.getAllClientes();
        this.getAllMascotas();
        //this.getOneEspecie(4);
       
      
        
        
        
       
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
func(id:number) {
    this.especies.map(function(especie){
        
        if (especie.id==id){
            return especie.nombreespecie;
        }
    })

}
    getAllMascotas(){
        
        this._http.get(`${this.urlBase}/api/Mascota/`).map(res => res.json()).subscribe(
          result => {
            
              this.mascotas = result;
             
              console.log(this.mascotas);

              
              this.log();
              console.log(this.mascotas);
              this.getOneEspecie(this.mascota.idespecie);
              
              
                            

              //this.getOne(this.mascota.idespecie);
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
      //

      getOneEspecie(id:number){
    
       
        this._http.get(`${this.urlBase}/api/Especie/${id}`).map(res => res.json()).subscribe(
          result => {
                  this.especie = result;
                  console.log(this.especie);

                  console.log('titulo : '+this.especie.nombreespecie);
                  
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
     
   //
    create(){
         
      this._http.post(`${this.urlBase}/api/Mascota/`,this.mascota).map(res => res.json()).subscribe(
        result => {
            alert("Mascota creado");
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

        console.log('hola : ');
        console.log(this.nombremascota);
        
              
     
    }
  
  
}
