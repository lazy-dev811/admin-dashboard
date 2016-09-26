import { combineReducers } from 'redux';
import books from './books';
import activeBook from './activeBook';

const rootReducer = combineReducers({
  books,
  activeBook,
});

export default rootReducer;
