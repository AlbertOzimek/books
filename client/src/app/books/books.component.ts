import { Component, OnInit } from '@angular/core';
import {BooksService} from './books.service';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private  booksService: BooksService) { }

  ngOnInit() {
  }

  getBooks(): Observable<Array<Book>> {
    return this.booksService.getBooks();
  }
}
