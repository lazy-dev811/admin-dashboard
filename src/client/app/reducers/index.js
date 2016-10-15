import { combineReducers } from 'redux';
import books from './books';
import greet from '../components/Greet/reducer';
import weather from '../components/Weather/redux/reducer';

const rootReducer = combineReducers({
  books,
  greet,
  weather,
});

export default rootReducer;
