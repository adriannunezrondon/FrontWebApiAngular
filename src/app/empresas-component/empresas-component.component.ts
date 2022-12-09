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

    


///////////////////////////////////////////////////////////********* */
  constructor(private ruta:Router, private ServicioEmp: ServicioEmpresasService) { 
   
  }

 

  //*********************************************************** */
  ngOnInit(): void {
    this.ServicioEmp.getmpresas().subscribe(
      EmpresasWebService => this.arrEmpresas = EmpresasWebService);
  }

//************************************************************** */
volverHome(){

this.ruta.navigate(['']);

}

}

