import {booksReducer, BookState} from './book.reducer';

export interface AppState {
  books: BookState;
}

export const appReducers = {books: booksReducer};
