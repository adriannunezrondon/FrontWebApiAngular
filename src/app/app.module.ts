import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmpresasComponentComponent } from './empresas-component/empresas-component.component';
import { ProductosComponentComponent } from './productos-component/productos-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ServicioEmpresasService } from './servicio-empresas.service';
import { ProductoServicioService } from './producto-servicio.service';
import { EmpresasInsertarComponent } from './empresas-component/empresas-insertar/empresas-insertar.component';

const rutas:Routes=[
{path:'', component:HomeComponentComponent},
{path:'Empresas', component:EmpresasComponentComponent},
{path:'Productos', component:ProductosComponentComponent},
{path:'insertar-empresas', component:EmpresasInsertarComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    EmpresasComponentComponent,
    ProductosComponentComponent,
    EmpresasInsertarComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
  ],



  providers: [ServicioEmpresasService, ProductoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
