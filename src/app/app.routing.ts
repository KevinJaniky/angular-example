import {Routes} from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {PagesComponent} from './pages/pages.component';

export const routes: Routes = [
    {
        path: '', component: AccueilComponent
    },
    {
        path: 'pages/:slug', component: PagesComponent
    }
];
