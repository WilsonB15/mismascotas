import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
  

@Component({

    
  templateUrl: 'mascotas.component.html'
  
})
export class MascotasComponent implements OnInit{ 
    public especie: any={
        nombreespecie:  '',
        idespecieespecie:  '',


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
        idraza :  '',
        email :  '',
        fechanac :  '2017-10-24',
        sexo :  'M',
        foto :  '',
    } 

        title:string = 'app';
        idmascota:  '';
        nombremascota :  '';
        nombrecliente :  '';
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

        filesToUpload: Array<File>;

        constructor(private _http: Http){ this.filesToUpload = []; }

    ngOnInit(){
        this.getAllEspecies();
        this.getAllClientes();
       
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
     
   //
    create(){
          //  if(this.mascota.nombremascota.invalid == true) {
       if ((this.mascota.idmascota == null) || (this.mascota.nombremascota == "") || (this.mascota.idcliente == "") || (this.mascota.idespecie == "") || (this.mascota.idraza == "") || (this.mascota.fechanac == "")  ) {
 
         swal({
           position: 'bottom',
           type: 'error',
           title: 'Complete todos los campos',
           showConfirmButton: false,
           timer: 600
         });
           
       }
       else { 
        
         
      this._http.post(`${this.urlBase}/api/Mascota/`,this.mascota).map(res => res.json()).subscribe(
        result => {
            swal({
                position: 'center',
                type: 'success',
                title: 'Mascota registrada correctamente',
                showConfirmButton: true,
                
              });
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
      }

    /*  createfoto(){   
       
    this._http.post(`${this.urlBase}/api/docfile`,this.foto).map(res => res.json()).subscribe(
      result => {
          swal({
              position: 'center',
              type: 'success',
              title: 'imagen guardada',
              showConfirmButton: true,
              
            });
          console.log(result);
      },
      error => {
          this.errorMessage = <any>error;
           
          if(this.errorMessage !== null){
            console.log('fotosolo : '+this.foto);
            console.log('mascotapuntofoto : '+this.mascota.foto);
              console.log(this.errorMessage);
              alert("Error en la petición");
          }
      }
    );      
      
   
      } */

      upload() {
        this.makeFileRequest("http://localhost:8080/api/docfile", [], this.filesToUpload).then((result) => {
            
            console.log(result);
        }, (error) => {
            
            console.error(error);
        });
    }
 
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>> fileInput.target.files;
    }

    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for(var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.setRequestHeader('Content-Type','multipart/form-data');
            xhr.send(formData);
        });
    }


  
    
  
    log(){
      console.log('titulo : '+this.nombremascota);
     
    }
  
  
}
