import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DefaultConection } from 'src/Api_Setting';
import { IProducto } from './productos-component/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {
  
  //private apiUrl = DefaultConection.urlApi + "api/Producto/MostrarProductos";
  private apiUrl="http://localhost:5189/api/Producto/MostrarProductos";

  getProducto():Observable<any>{    
     return this.http.get<any>(this.apiUrl);
  };

constructor(private http: HttpClient) { }

}
