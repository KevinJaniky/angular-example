import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {NgModel} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
@NgModule({
    exports : [ RouterModule ]
})

export class AppComponent {
    title = 'front2';


}
