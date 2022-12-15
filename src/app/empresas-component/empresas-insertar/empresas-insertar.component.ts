import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioEmpresasService } from 'src/app/servicio-empresas.service';
import { __values } from 'tslib';
import { IEmpresa } from '../IEmpresa';

@Component({
  selector: 'app-empresas-insertar',
  templateUrl: './empresas-insertar.component.html',
  styleUrls: ['./empresas-insertar.component.css']
})
export class EmpresasInsertarComponent implements OnInit {
  


Nuevaempresa : IEmpresa = {
  id: 0,
  nombre: '',
  direccion: '',
};

  constructor(private servicioEmpresa: ServicioEmpresasService
              , private ruta: Router
             ) 
  { 
    
  }//CONSTRUCTOR

  addEmpresa(){
    this.servicioEmpresa.AddEmpresa(this.Nuevaempresa)
    .subscribe({
      next: (empresa)=>{this.ruta.navigate(['Empresas']);}

    })   
    
  }

  

  

  ngOnInit(): void {

  }


/*
save(e:Event){
  e.preventDefault();
  const value = this.form.value;
  console.log(value);

}
*/


}
