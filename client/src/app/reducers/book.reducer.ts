import {ActionTypes, BookActions} from '../actions/book.action';
import {Book} from '../../model/book';


const defaultAsteroidState: BookState ={
  data: null,
    something: ''
};


export interface BookState {
  data: Book[];
  something: string;
}

export function booksReducer(asteroidState: BookState = defaultAsteroidState, asteroidAction: BookActions): BookState {
  switch (asteroidAction.type) {
    case ActionTypes.StoreData: return {...asteroidState, data: asteroidAction.payload};
    default: return asteroidState;
  }
}
