import {AppState} from '../reducers/app.reducer';

export const bookState = (appState: AppState) => {
  return appState.books.data;
};
