import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmpresa } from './empresas-component/IEmpresa';


@Injectable({
  providedIn: 'root'
})



export class ServicioEmpresasService {

  headers = new HttpHeaders();
  url :string = environment.baseUrlApi +"api/Empresa/";

  

//*************************************************************************************** */
   
  getEmpresas():Observable<IEmpresa[]>{ 
    debugger
    return this.http.get<IEmpresa[]>(this.url+"Empresas"/*,{headers: this.headers}*/);
   

  }
//****************************************************************************************** */

   AddEmpresa(Nuevaempresa: IEmpresa):Observable <IEmpresa> {
      return this.http.post<IEmpresa>(this.url + "Insertar_Empresa", Nuevaempresa/*,{headers: this.headers}*/);
   }


//****************************************************************************************** */

   getEmpresaPorID(id: string):Observable<IEmpresa>{
    
      return this.http.get<IEmpresa>(this.url+id/*,{headers: this.headers}*/);
   }


//****************************************************************************************** */

   putEmpresa(empresa:IEmpresa):Observable<IEmpresa>{
   
    return this.http.put<IEmpresa>(this.url+"Modificar",JSON.stringify(empresa)/*,{headers: this.headers}*/)

   }


//****************************************************************************************** */

   delEmpresa(id:string){
   
    return this.http.delete(this.url+id/*,{headers: this.headers}*/);

   }

   
//****************************************************************************************** */
  constructor(private http: HttpClient) { 
/*
      localStorage.setItem("ClaveApi", "@lb3rt0");
      this.headers.append("Content-Type", "application/json");
      this.headers.append("Authorization", "Bearer:" + localStorage.getItem("ClaveApi"))*/

  }



  }

 

