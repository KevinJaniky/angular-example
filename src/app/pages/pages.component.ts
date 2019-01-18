import {Component, OnInit} from '@angular/core';
import {Route, ActivatedRoute, Router} from '@angular/router';
import {PagesService} from '../services/pages.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    private slug: String;
    private data$;

    constructor(private router: ActivatedRoute, private pageService: PagesService, private _router: Router) {
    }

    ngOnInit() {
        this.router.params.subscribe(
            params => {
                this.slug = params['slug'];
            }
        );
        this.fetch();
    }

    fetch() {
        this.pageService.getOne(this.slug).subscribe((res) => {
            this.data$ = res['hits']['hits'];
            if (this.data$ === undefined) {
                this._router.navigate(['/']);
            }
        });
    }


}
