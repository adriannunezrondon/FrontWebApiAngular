import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoServicioService } from '../producto-servicio.service';
import { IProducto } from './IProducto';
import { IdtoProducto } from './IdtoProductos';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent implements OnInit {
    
  arrayProductos:IProducto[]=[];
  arrayDtoProductos:IdtoProducto[]=[];
    //arrayProductos:any[]=[];
  
  
  ngOnInit(): void {
    try{ 
          // debugger;
          /* this.servicioProducto.getProducto().subscribe(res=>{
           this.arrayProductos=res;});   */

           this.servicioProducto.getDtoProducto().subscribe(res=>{
           this.arrayDtoProductos = res;
          // console.log(this.arrayDtoProductos);
           });

    } catch(e){

      console.log("Error al obtener los datos de BBDD:"+e);
    }

  }

editarProducto(id:string){
  //console.log(id)
  this.ruta.navigate(['editar/producto/'+id])
}

deleteProducto(id:string){
  
  if(confirm("Seguro desea Eliminar el Producto!!!"))
  { 
      //this.ruta.navigate(['eliminar/producto/'+id]);
       this.servicioProducto.deleteProducto(id).subscribe(()=>{
          console.log("Recurso Eliminado");
          
       });
  }    

}
  

  volverHome(){

    this.ruta.navigate(['']);
    
    }

    IrInsertarProducto(){this.ruta.navigate(['insertar-producto'])}

    constructor(private ruta:Router, private servicioProducto:ProductoServicioService) {  }

}
