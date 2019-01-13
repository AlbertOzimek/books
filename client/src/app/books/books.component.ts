import { Component, OnInit } from '@angular/core';
import {BooksService} from './books.service';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';
import {select, State, Store} from '@ngrx/store';
import {AppState} from '../reducers/app.reducer';
import {Fetch} from '../actions/book.action';
import {bookState} from '../selectors/book.selector';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  // books$: Observable<string[]>;
  books$: Observable<Book[]>

  constructor(private  booksService: BooksService, private store: Store<AppState>) { }

  ngOnInit() {
    // this.books$ = this.booksService.getBooks();
    this.store.dispatch(new Fetch());
    this.books$ = this.store.pipe(select(bookState));
  }
}
