import { combineReducers } from 'redux';
import widgetBlog from '../components/Blog/redux/reducer';
import widgetColorPicker from '../components/ColorPicker/redux/reducer';
import widgetGreet from '../components/Greet/redux/reducer';
import widgetSettings from '../components/Settings/redux/reducer';
import widgetToastMessages from '../components/ToastMessages/redux/reducer';
import widgetWeather from '../components/Weather/redux/reducer';
import widgetQuote from '../components/Quote/redux/reducer';

const rootReducer = combineReducers({
  widgetBlog,
  widgetColorPicker,
  widgetGreet,
  widgetSettings,
  widgetToastMessages,
  widgetWeather,
  widgetQuote,
});

export default rootReducer;
