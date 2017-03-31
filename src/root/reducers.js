import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as widgetTodo } from '../components/Todo';
import { reducer as widgetBookmarks } from '../components/Bookmarks';
import { reducer as widgetColorPicker } from '../components/ColorPicker';
import { reducer as widgetGreet } from '../components/Greet';
import { reducer as widgetSettings } from '../components/Settings';
import { reducer as widgetToastMessages } from '../components/ToastMessages';
import { reducer as widgetQuote } from '../components/Quote';
import { reducer as widgetSidebar } from '../components/Sidebar';
import { reducer as widgetSlider } from '../components/Slider';
import { reducer as widgetSliderDetail } from '../components/SliderDetail';
import { reducer as widgetYoutubePlayer } from '../components/YoutubePlayer';
import { reducer as RouteHome } from '../components/Routes/Home';

import { reducer as config } from '../components/Widget';

const rootReducer = combineReducers({
  widgetTodo,
  widgetBookmarks,
  widgetColorPicker,
  widgetGreet,
  widgetSettings,
  widgetToastMessages,
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
