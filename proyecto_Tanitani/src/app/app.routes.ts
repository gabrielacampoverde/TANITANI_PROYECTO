
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component';



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
            path:'facturas/crear',
            component:CrearFacturaComponent,
        },

        {
            path:'facturas',
            component:FacturasComponent,
        },

        {    
            path:'facturas/:id',
            component:VerFacturaComponent,

        },
       
        {
            path:'**',
            component:LoginComponent

        }

];

    export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});