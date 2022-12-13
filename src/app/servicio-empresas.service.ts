import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DefaultConection } from 'src/Api_Setting';
import { IEmpresa } from './empresas-component/IEmpresa';


@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresasService {
 
 
  private apiUrl = DefaultConection.urlApi + "api/Empresa/Empresas";
  //private apiUrl="http://localhost:5189/api";

  getEmpresas():Observable<IEmpresa[]>{ 
    //debugger;
    return this.http.get<IEmpresa[]>(this.apiUrl);
   

  }

  constructor(private http: HttpClient/*, @Inject('BASE_URL') private baseUrl:string*/) { }

  }

 

