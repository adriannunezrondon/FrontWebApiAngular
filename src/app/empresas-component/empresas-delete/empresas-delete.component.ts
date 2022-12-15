import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpresasService } from 'src/app/servicio-empresas.service';
import { IEmpresa } from '../IEmpresa';

@Component({
  selector: 'app-empresas-delete',
  templateUrl: './empresas-delete.component.html',
  styleUrls: ['./empresas-delete.component.css']
})
export class EmpresasDeleteComponent implements OnInit {

  empresaeliminar : IEmpresa = {
    id: 0,
    nombre: '',
    direccion: '',
  }
  constructor(private rutaActiva: ActivatedRoute, private servicioEmpresa: ServicioEmpresasService, private route:Router) { }

  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe({
      next:(parametro)=>{
        const id = parametro.get('id');
        if(id){

          this.servicioEmpresa.delEmpresa(id).subscribe({
            next: (empresa)=>{this.route.navigate(['Empresas']);}
      
        })
        }

      }



    });

 }
}
