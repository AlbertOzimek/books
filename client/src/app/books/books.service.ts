import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../../model/book';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    constructor(private http: HttpClient) {
    }

    public getBooks(): Observable<Array<Book>> {
        return this.http.get<Book[]>(`${environment.apiUrl}/books`);
    }
}
