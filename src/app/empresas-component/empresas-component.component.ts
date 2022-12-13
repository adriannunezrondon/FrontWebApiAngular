import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpresasService } from '../servicio-empresas.service';
import { IEmpresa } from './IEmpresa';



@Component({
  selector: 'app-empresas-component',
  templateUrl: './empresas-component.component.html',
  styleUrls: ['./empresas-component.component.css']
})
export class EmpresasComponentComponent implements OnInit {

    arrEmpresas: IEmpresa[] = [];


  //*********************************************************** */
  ngOnInit(): void {

    try{ 
          this.ServicioEmp.getEmpresas().subscribe(
          EmpresasWebService => this.arrEmpresas = EmpresasWebService);

    } catch(e){
      console.log("Error al cargar las empresas"+e);
    }


  }

//************************************************************** */
volverHome(){

this.ruta.navigate(['']);

}


FormInsertarEmp(){this.ruta.navigate(['insertar-empresas']);}

constructor(private ruta:Router, private ServicioEmp: ServicioEmpresasService) { 
   
}

}

