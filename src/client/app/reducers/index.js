import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import widgetTodo from '../components/Todo/redux/reducer';
import widgetBookmarks from '../components/Bookmarks/redux/reducer';
import widgetColorPicker from '../components/ColorPicker/redux/reducer';
import widgetGreet from '../components/Greet/redux/reducer';
import widgetSettings from '../components/Settings/redux/reducer';
import widgetToastMessages from '../components/ToastMessages/redux/reducer';
import widgetWeather from '../components/Weather/redux/reducer';
import widgetQuote from '../components/Quote/redux/reducer';
import widgetSidebar from '../components/Sidebar/redux/reducer';
import widgetSlider from '../components/Slider/redux/reducer';
import widgetSliderDetail from '../components/SliderDetail/redux/reducer';
import widgetYoutubePlayer from '../components/YoutubePlayer/redux/reducer';
import RouteHome from '../components/Routes/Home/redux/reducer';

import config from '../components/Widget/redux/reducer';

const rootReducer = combineReducers({
  widgetTodo,
  widgetBookmarks,
  widgetColorPicker,
  widgetGreet,
  widgetSettings,
  widgetToastMessages,
  widgetWeather,
  widgetQuote,
  widgetSidebar,
  widgetSlider,
  widgetSliderDetail,
  widgetYoutubePlayer,
  RouteHome,
  config,
  form: formReducer,
  routing: routerReducer,
});

export default rootReducer;
