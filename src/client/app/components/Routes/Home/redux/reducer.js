import { combineReducers } from 'redux';
import activeWidgets from '../../../Slider/redux/reducer.js';


const testReducer = combineReducers({
  activeWidgets,
});

export default testReducer;
