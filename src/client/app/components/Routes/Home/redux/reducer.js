import { combineReducers } from 'redux';
import { reducer as activeWidgets } from '../../../Slider';
import { reducer as wallpaperPicker } from '../../../WallpaperPicker';


const testReducer = combineReducers({
  activeWidgets,
  wallpaperPicker,
});

export default testReducer;
