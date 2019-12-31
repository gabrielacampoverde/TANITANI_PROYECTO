
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';



const appRoutes:Routes = [


        {
        path:'',
        component:LoginComponent,

        },

        {
            path:'login',
            component:LoginComponent,

        },
  
        {
            path:'usuarios/crear',
            component:CrearUsuarioComponent,
        },

        {
            path:'usuarios',
            component:UsuariosComponent,
        },

        {    
            path:'usuarios/:id',
            component:VerUsuarioComponent,

        },
       
        {
            path:'**',
            component:LoginComponent

        }

];

    export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});