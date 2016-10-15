import { combineReducers } from 'redux';
import books from './books';
import greet from '../components/Greet/reducer';

const rootReducer = combineReducers({
  books,
  greet,
});

export default rootReducer;
