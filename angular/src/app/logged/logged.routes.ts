import { FabricanteComponent } from './components/mant/fabricante/fabricante.component';

import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { ProductosComponent } from './components/mant/productos/productos.component';
import { CrearProductoComponent} from './components/mant/crear-producto/crear-producto.component'
import { CategoriasComponent } from './components/mant/categorias/categorias.component';
import { CrearCategoriaComponent } from './components/mant/crear-categoria/crear-categoria.component';


const routes: Routes = [
  {
    path: '', component: LoggedComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' } },
      // mantenimientos
      { path: 'fabricante', component: FabricanteComponent , data: { title: 'Mantenimiento de Usuarios' } },
      { path: 'categorias', component: CategoriasComponent , data: { title: 'Mantenimiento de Categorias' } },
      { path: 'categorias/crear', component: CrearCategoriaComponent , data: { title: 'Crear Categoria' } },
      { path: 'productos', component: ProductosComponent , data: { title: 'Mantenimiento de Productos' } },
      { path: 'productos/crear', component: CrearProductoComponent , data: { title: 'Crear Producto' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
