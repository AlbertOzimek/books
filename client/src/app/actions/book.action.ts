import {Action} from '@ngrx/store';
import {Book} from '../../model/book';


export enum ActionTypes {
  Fetch = 'Fetch',
  StoreData = 'Store'
}

export class Fetch implements Action {
  readonly type = ActionTypes.Fetch;
}

export class Store implements Action {
  readonly type = ActionTypes.StoreData;
  constructor(public payload: Book[]) {}
}

export type BookActions = Fetch | Store;
