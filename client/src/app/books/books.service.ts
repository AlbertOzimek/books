import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Book} from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<Book> = [new Book("111", "Eine kurze Geschichte der Menscheit", "Yuval Noah Harari", "2016", "DVA", 36),
    new Book("222", "Homo Deus", "Yuval Noah Harari", "2017", "CHBECK", 37),
    new Book("333", "21 Lektionen", "Yuval Noah Harari", "2017", "CHBECK", 37)];

  constructor() { }

  public getBooks(): Observable<Array<Book>> {
    return of(this.books);
  }
}
