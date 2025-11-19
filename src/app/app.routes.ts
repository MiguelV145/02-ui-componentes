import { Routes } from '@angular/router';
import { InterfazPage } from './Features/interfaz-page/interfaz-page';

export const routes: Routes = [


    {
        path:'',
        component: InterfazPage
    },

    {
        path: 'heuristica',
        loadChildren: () => import('./Features/heuristica/component/heuristica.routes').then(m => m.heuristicaRoutes)

    },
    {
        path: '**',
        redirectTo: ''
    }
];
