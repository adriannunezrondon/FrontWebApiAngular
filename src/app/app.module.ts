import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { EmpresasComponentComponent } from './empresas-component/empresas-component.component';
import { ProductosComponentComponent } from './productos-component/productos-component.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ServicioEmpresasService } from './servicio-empresas.service';
import { ProductoServicioService } from './producto-servicio.service';
import { EmpresasInsertarComponent } from './empresas-component/empresas-insertar/empresas-insertar.component';
import { ProductoInsertarComponent } from './productos-component/producto-insertar/producto-insertar.component';
import { EmpresasModificarComponent } from './empresas-component/empresas-modificar/empresas-modificar.component';
import { EmpresasDeleteComponent } from './empresas-component/empresas-delete/empresas-delete.component';
import { ProductoEditarComponent } from './productos-component/producto-editar/producto-editar.component';
import { ProductoDeleteComponent } from './productos-component/producto-delete/producto-delete.component';


const rutas:Routes=[
{path:'', component:HomeComponentComponent},
{path:'Empresas', component:EmpresasComponentComponent},
{path:'Productos', component:ProductosComponentComponent},
{path:'insertar-empresas', component:EmpresasInsertarComponent},
{path:'insertar-producto', component:ProductoInsertarComponent},
{path:'modificar/empresas/:id', component:EmpresasModificarComponent},
{path:'eliminar/empresas/:id', component:EmpresasDeleteComponent},
{path:'editar/producto/:id', component: ProductoEditarComponent},
{path:'eliminar/producto/:id', component: ProductoDeleteComponent},


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    EmpresasComponentComponent,
    ProductosComponentComponent,
    EmpresasInsertarComponent,
    ProductoInsertarComponent,
    EmpresasModificarComponent,
    EmpresasDeleteComponent,
    ProductoEditarComponent,
    ProductoDeleteComponent,
    
  
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
