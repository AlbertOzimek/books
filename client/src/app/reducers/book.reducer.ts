import {ActionTypes, BookActions} from '../actions/book.action';


const defaultAsteroidState: BookState ={
  data: '',
    something: ''
};


export interface BookState {
  data: string;
  something: string;
}

export function booksReducer(asteroidState: BookState = defaultAsteroidState, asteroidAction: BookActions): BookState {
  switch (asteroidAction.type) {
    case ActionTypes.StoreData: return {...asteroidState, data: asteroidAction.payload};
    default: return asteroidState;
  }
}
