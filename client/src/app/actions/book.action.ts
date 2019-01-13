import {Action} from '@ngrx/store';


export enum ActionTypes {
  Fetch = 'Fetch',
  StoreData = 'Store'
}

export class Fetch implements Action {
  readonly type = ActionTypes.Fetch;
}

export class Store implements Action {
  readonly type = ActionTypes.StoreData;
  constructor(public payload: string) {}
}

export type BookActions = Fetch | Store;
