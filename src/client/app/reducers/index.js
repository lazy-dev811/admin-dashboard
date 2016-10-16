import { combineReducers } from 'redux';
import widgetColorPicker from '../components/ColorPicker/redux/reducer';
import widgetGreet from '../components/Greet/redux/reducer';
import widgetSettings from '../components/Settings/redux/reducer';
import widgetWeather from '../components/Weather/redux/reducer';
import widgetQuote from '../components/Quote/redux/reducer';

const rootReducer = combineReducers({
  widgetColorPicker,
  widgetGreet,
  widgetSettings,
  widgetWeather,
  widgetQuote,
});

export default rootReducer;
