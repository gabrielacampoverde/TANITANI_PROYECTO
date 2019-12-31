import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Componentes
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoggedComponent } from './logged.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FabricanteComponent } from './components/mant/fabricante/fabricante.component';


// rutas
import { LoggedRoutingModule } from './logged.routes';
import { ChartsModule } from 'ng2-charts';
import { ProductosComponent } from './components/mant/productos/productos.component';
import { CrearProductoComponent } from './components/mant/crear-producto/crear-producto.component';
import { CategoriasComponent } from './components/mant/categorias/categorias.component';
import { CrearCategoriaComponent } from './components/mant/crear-categoria/crear-categoria.component';
import { ListCategoriasComponent } from './components/mant/list-categorias/list-categorias.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoggedComponent,
    AccountSettingsComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    FabricanteComponent,
    ProductosComponent,
    CrearProductoComponent,
    CategoriasComponent,
    CrearCategoriaComponent,
    ListCategoriasComponent
   
  ],
  imports: [
    LoggedRoutingModule,
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    CategoriasComponent
  ],
  providers: [],
})
export class LoggedModule { }