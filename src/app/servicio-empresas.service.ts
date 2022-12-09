import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { IEmpresa } from './empresas-component/IEmpresa';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpresasService {
  
  private apiUrl = "http://localhost:5189/api/Empresa/Empresas";
  constructor(private http: HttpClient/*, @Inject('BASE_URL') private baseUrl:string*/) { }

  getmpresas():Observable<IEmpresa[]>{ 
    //debugger;
    return this.http.get<IEmpresa[]>(this.apiUrl);

  }

  }

 

