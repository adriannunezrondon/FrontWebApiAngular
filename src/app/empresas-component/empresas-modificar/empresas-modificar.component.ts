import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicioEmpresasService } from 'src/app/servicio-empresas.service';
import { IEmpresa } from '../IEmpresa';

@Component({
  selector: 'app-empresas-modificar',
  templateUrl: './empresas-modificar.component.html',
  styleUrls: ['./empresas-modificar.component.css']
})
export class EmpresasModificarComponent implements OnInit {

  editarEmpresa: IEmpresa={
    id: 0,
    nombre: '',
    direccion: '',

  }
  constructor(private rutaActiva: ActivatedRoute, private servicioEmpresa: ServicioEmpresasService, private ruta:Router) { }

  ngOnInit(): void {

    this.rutaActiva.paramMap.subscribe({
     next: (parametro)=>{
      const id= parametro.get('id');
      if(id){
      
        this.servicioEmpresa.getEmpresaPorID(id)
         .subscribe({
          next:(response) =>{ this.editarEmpresa=response;
           // console.log(response);
            
          },

         });

      }
     }

    })
  }



  updateEmpresa(){
    this.servicioEmpresa.putEmpresa(this.editarEmpresa)
    .subscribe({
      next: (empresa)=>{this.ruta.navigate(['Empresas']);}

  })

}

}
  
