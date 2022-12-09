import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmpresasComponentComponent } from './empresas-component/empresas-component.component';
import { ProductosComponentComponent } from './productos-component/productos-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ServicioEmpresasService } from './servicio-empresas.service';

const rutas:Routes=[
{path:'', component:HomeComponentComponent},
{path:'Empresas', component:EmpresasComponentComponent},
{path:'Productos', component:ProductosComponentComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    EmpresasComponentComponent,
    ProductosComponentComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
  ],



  providers: [ServicioEmpresasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
