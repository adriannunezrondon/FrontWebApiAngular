import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoServicioService } from 'src/app/producto-servicio.service';

@Component({
  selector: 'app-producto-delete',
  templateUrl: './producto-delete.component.html',
  styleUrls: ['./producto-delete.component.css']
})
export class ProductoDeleteComponent implements OnInit {

  constructor(private urlActual: ActivatedRoute
             ,private ServicioProducto: ProductoServicioService
             ,private ruta: Router
             ) 
  { }




  
  ngOnInit(): void {

    this.urlActual.paramMap.subscribe({
      next:(parametro) =>{

        const id=parametro.get('id')
        if(id){

          this.ServicioProducto.deleteProducto(id)
          .subscribe({
            next:(producto) => {this.ruta.navigate(['Productos'])}

          });

        }

      }


    });

  }

}
