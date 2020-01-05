
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/mantenimientos/usuarios/usuarios.component';



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
            path:'usuarios',
            component:UsuariosComponent,
        },

       
        {
            path:'**',
            component:LoginComponent

        }

];

    export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});