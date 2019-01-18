import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AccueilComponent} from './accueil/accueil.component';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import { PagesComponent } from './pages/pages.component';
import {PagesService} from './services/pages.service';


@NgModule({
    declarations: [
        AppComponent,
        AccueilComponent,
        PagesComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
    ],
    providers: [
        PagesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
