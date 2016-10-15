import { combineReducers } from 'redux';
import books from './books';
import greet from './greet';
import buttonClicked from './buttonClicked';

const rootReducer = combineReducers({
  books,
  greet,
  buttonClicked,
});

export default rootReducer;
