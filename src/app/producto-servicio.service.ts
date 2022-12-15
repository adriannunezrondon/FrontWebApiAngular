import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IProducto } from './productos-component/IProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicioService {
  
  url :string = environment.baseUrlApi + "api/Producto/";
//********************************************************************************* */

  getProducto():Observable<any>{    
     return this.http.get<any>(this.url +"MostrarProductos");
  };


//******************************************************************************** */


  addProducto(NuevoProducto:IProducto):Observable<IProducto>{

    return this.http.post<IProducto>(this.url+"insertarProducto",NuevoProducto)
  }

  
//********************************************************************************** */

getProductoId(id:string):Observable<IProducto>{
    
    return this.http.get<IProducto>(this.url+id);
 }

 putProducto(Producto:IProducto):Observable<IProducto>{
    return this.http.put<IProducto>(this.url+"Editar",Producto);
 }



constructor(private http: HttpClient) { }

}
