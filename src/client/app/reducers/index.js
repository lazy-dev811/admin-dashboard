import { combineReducers } from 'redux';
import widgetGreet from '../components/Greet/redux/reducer';
import widgetWeather from '../components/Weather/redux/reducer';

const rootReducer = combineReducers({
  widgetGreet,
  widgetWeather,
});

export default rootReducer;
