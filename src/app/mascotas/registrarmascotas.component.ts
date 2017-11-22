import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/modal/modal.component';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import swal from 'sweetalert2';
//import { DatePipe } from '@angular/common/src/pipes';
//[ImageUrl]  AS ('/content/homepageimages/'+[ImageName]),

import { DatePipe } from '@angular/common';
  

@Component({
    selector: 'date-pipe',
 templateUrl: 'registrarmascotas.component.html'
  
})

export class RegistrarMascotasComponent implements OnInit{ 
    public especie: any={
        nombreespecie:  '',
        idespecie:  '',


    } 
    public raza: any={
        
        nombreraza:  '',
        idespecie:  '',


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
        foto;
        nombrearchivo: '';
        ididespecie :  '';
        nombreraza :  '';
        idespecieespecie : '';
        nombreespecie =  '';
        clientes = [];
        especies = [];
        mascotas = [];
        razas = [];
        errorMessage = '';
        urlFotos = "http://localhost:8080/fotosmascotas/";
        mostrarfoto = false;
    
        urlBase =  "http://localhost:8080";

        //filesToUpload: Array<File>;
        filesToUpload: Array<File> = [];
        
        constructor(private _http: Http){ /*this.filesToUpload = [];*/ }

    ngOnInit(){
        this.getAllEspecies();
        this.getAllClientes();
        //this.getRazasxEspecie(4);
        //probar
        
       // console.log(today);
        //probar *     
      }

     // http://localhost:8080/api/Raza?idespecie=3
  
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
                alert(error._body);
            }
        }
      );
    }
    getRazasxEspecie(id:number){
        console.log('Hola');
        this._http.get(`${this.urlBase}/api/Raza?idespecie=${id}`).map(res => res.json()).subscribe(
          result => {
                  this.razas = result;
                  console.log(this.razas);

                  console.log('especie : '+this.razas);
                  
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
              this.mascota.foto = this.foto;
              console.log(this.foto);
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
                alert(error._body);
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
      
   
      } 

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
        
            xhr.send(formData);
        });
    }
*/
/*
upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    //for(let i =0; i < files.length; i++){
      //  formData.append("uploads[]", files[i], files[i]['name']);
    //}
    
    formData.append("uploads[]", files[0], files[0]['name']);
    console.log('form data variable :   '+ formData); 
    swal({
        position: 'center',
        type: 'success',
        title: 'imagen guardada',
        showConfirmButton: true,
        
      });
    //this.address.documents = files.toString();
    console.log('ruta   :   ', files);

        this._http.post('http://localhost:8080/api/docfile', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
     this.filesToUpload = <Array<File>>fileInput.target.files;
//this.product.photo = fileInput.target.files[0]['name'];
   // console.log('files', FileList.toString);
}

*/
upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
        this._http.post('http://localhost:8080/api/docfile', formData)
       .map(files => files.json())
      .subscribe(files => {
        console.log('files', files[0])
        console.log(files);
        this.foto = this.filesToUpload[0].name;
        console.log(this.foto);
        this.mostrarfoto = true;
        
    },
    error => {
        this.errorMessage = <any>error;
         
        if(this.errorMessage !== null){
            console.log(this.errorMessage);
            alert("Error en la petición");
        }
    })
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
   
    
    //this.product.photo = fileInput.target.files[0]['name'];
  }
    
  
    log(){
      console.log('titulo : '+this.nombremascota);
     
    }
  
  
}

export class DatePipeComponent {
    today = Date.now();
    fixedTimezone = '2015-06-15T09:03:01+0900';
  }