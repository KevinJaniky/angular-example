import {Component, OnInit} from '@angular/core';
import {Api} from '../../assets/Api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {PagesService} from '../services/pages.service';
import {Pages} from '../models/pages';


@Component({
    selector: 'app-accueil',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

    body;
    headers;
    private data$: Observable<Pages[]>;

    constructor(private pageService: PagesService) {
    }

    ngOnInit() {
        this.pageService.getAll().subscribe((res) => {
            this.data$ = (res)['hits']['hits'];
        });
    }


}
