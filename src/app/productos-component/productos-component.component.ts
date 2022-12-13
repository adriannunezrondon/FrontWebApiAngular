import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoServicioService } from '../producto-servicio.service';
import { IProducto } from './IProducto';

@Component({
  selector: 'app-productos-component',
  templateUrl: './productos-component.component.html',
  styleUrls: ['./productos-component.component.css']
})
export class ProductosComponentComponent implements OnInit {
    
  arrayProductos:IProducto[]=[];
    //arrayProductos:any[]=[];
  
  
  ngOnInit(): void {
    try{ 
           this.servicioProducto.getProducto().subscribe(res=>{
           this.arrayProductos=res;});

    } catch(e){

      console.log("Error al obtener los datos de BBDD:"+e);
    }

  }


  

  volverHome(){

    this.ruta.navigate(['']);
    
    }

    

    constructor(private ruta:Router, private servicioProducto:ProductoServicioService) {  }

}
