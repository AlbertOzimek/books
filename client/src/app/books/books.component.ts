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

  books$: Observable<Array<Book>>;

  constructor(private  booksService: BooksService) { }

  ngOnInit() {
    this.books$ = this.booksService.getBooks();
  }
}
