import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpresa } from 'src/app/empresas-component/IEmpresa';
import { ProductoServicioService } from 'src/app/producto-servicio.service';
import { ServicioEmpresasService } from 'src/app/servicio-empresas.service';
import { IProducto } from '../IProducto';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

 Producto :IProducto={

  id:0,
  nombre:'',
  categorias:'',
  descripcion:'',
  precio:0,
  unidades:0,
  empresaID:0
 }

 listadoEmpresas :IEmpresa[]=[];





  constructor(private servicioEmpresa:ServicioEmpresasService
             ,private rutaActiva: ActivatedRoute
             ,private servicioProducto:ProductoServicioService
             ,private ruta: Router
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



        this.rutaActiva.paramMap.subscribe({

          next: (parametro)=>{
            const id = parametro.get('id');
            if(id){
    
              this.servicioProducto.getProductoId(id)
               .subscribe({
                next:(response) =>{ this.Producto=response;
                 // console.log(response);
                  
                },
      
               });
      
            }
          }
        })

          

  }


    


  updateProducto(){
    console.log("Entro")
        this.servicioProducto.putProducto(this.Producto)
        .subscribe({
          next: (response)=>{ this.ruta.navigate(['Productos']);}
        });
  }

}
