import { combineReducers } from 'redux';
import books from './books';
import widgetGreet from '../components/Greet/redux/reducer';
import widgetWeather from '../components/Weather/redux/reducer';

const rootReducer = combineReducers({
  books,
  widgetGreet,
  widgetWeather,
});

export default rootReducer;
