import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEmpresa } from './empresas-component/IEmpresa';


@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresasService {
 
  url :string = environment.baseUrlApi +"api/Empresa/";

//*************************************************************************************** */
  getEmpresas():Observable<IEmpresa[]>{ 
    //debugger;
    return this.http.get<IEmpresa[]>(this.url+"Empresas");
   

  }
//****************************************************************************************** */

   AddEmpresa(Nuevaempresa: IEmpresa):Observable <IEmpresa> {
      return this.http.post<IEmpresa>(this.url + "Insertar_Empresa", Nuevaempresa);
   }


//****************************************************************************************** */

   getEmpresaPorID(id: string):Observable<IEmpresa>{
    
      return this.http.get<IEmpresa>(this.url+id);
   }


//****************************************************************************************** */

   putEmpresa(empresa:IEmpresa):Observable<IEmpresa>{
   
    return this.http.put<IEmpresa>(this.url+"Modificar",empresa)

   }


//****************************************************************************************** */

   delEmpresa(id:string){
   
    return this.http.delete(this.url+id);

   }

   
//****************************************************************************************** */
  constructor(private http: HttpClient) { }

  }

 

