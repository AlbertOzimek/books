import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, mergeMap, tap} from 'rxjs/operators';
import {ActionTypes, Store} from '../actions/book.action';
import {BooksService} from '../books/books.service';

@Injectable({providedIn: 'root'})
export class BookEffect {

    @Effect()
    fetch$: Observable<Action> = this.actions$.pipe(
        ofType(ActionTypes.Fetch),
        mergeMap(
            action => {
                return this.booksService.getBooks().pipe(
                    map(data => {
                        return new Store(data);
                    }));
            }
        ));

    constructor(private actions$: Actions, private booksService: BooksService) {
    }
}
