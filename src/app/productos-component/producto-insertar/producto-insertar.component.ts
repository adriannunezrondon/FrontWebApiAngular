import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmpresa } from 'src/app/empresas-component/IEmpresa';
import { ProductoServicioService } from 'src/app/producto-servicio.service';
import { ServicioEmpresasService } from 'src/app/servicio-empresas.service';
import { IProducto } from '../IProducto';

@Component({
  selector: 'app-producto-insertar',
  templateUrl: './producto-insertar.component.html',
  styleUrls: ['./producto-insertar.component.css']
})
export class ProductoInsertarComponent implements OnInit {

  NuevoProducto: IProducto={
    id:0,
    nombre:'',
    categorias:'',
    descripcion:'',
    precio:0,
    unidades:0,
    empresaID:0

  }

 listadoEmpresas :IEmpresa []=[];

  constructor(private servicioProducto: ProductoServicioService
            , private ruta: Router
            , private servicioEmpresa: ServicioEmpresasService
            ) 
            { }

  ngOnInit(): void {

    try{ 
      this.servicioEmpresa.getEmpresas().subscribe(
      res =>{this.listadoEmpresas = res;});
  

}     
 catch(e){
           console.log("Error al cargar las empresas"+e);
}

  }

  addProducto(){

    this.servicioProducto.addProducto(this.NuevoProducto)
    .subscribe({
      next: (producto)=>{this.ruta.navigate(['Productos']);}

    })   
  }





}
