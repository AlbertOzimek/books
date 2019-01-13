import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../../model/book';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private httpClient: HttpClient) {
    }

    public getBooks(): Observable<Array<Book>> {
        return this.httpClient.get<Book[]>(`${environment.apiUrl}/books`);
    }

    public getAsteroids(): Observable<string>  {
        return this.httpClient.get<string>('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY');
    }
}
