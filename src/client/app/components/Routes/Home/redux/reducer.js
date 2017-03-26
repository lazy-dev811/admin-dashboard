import { combineReducers } from 'redux';
import { reducer as activeWidgets } from '../../../Slider';


const testReducer = combineReducers({
  activeWidgets,
});

export default testReducer;
