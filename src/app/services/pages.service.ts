import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pages} from '../models/pages';
import {Api} from '../../assets/Api';

@Injectable({
    providedIn: 'root'
})
export class PagesService {

    constructor(private http: HttpClient) {
    }

    private body;
    private headers;

    getAll() {
        this.body = {
            'query': {
                'bool': {
                    'must': {
                        'match': {
                            'publish': 1
                        }
                    }
                }
            }
        };
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-type', 'application/json');
        return this.http.post<Pages[]>(Api.search, this.body, this.headers);
    }

    getOne(slug: String) {
        this.body = {
            'query': {
                'bool': {
                    'must': [
                        {
                            'match': {
                                'slug': slug
                            }
                        },
                        {
                            'match': {
                                'publish': 1
                            }
                        }
                    ]
                }
            }
        };
        this.headers = new HttpHeaders();
        this.headers = this.headers.append('Content-type', 'application/json');
        return this.http.post<Pages>(Api.search, this.body, this.headers);
    }
}
