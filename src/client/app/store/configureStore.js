import { createStore, combineReducers } from 'redux';

import buttonClicked from '../reducers/buttonClicked.js';
import greetRequested from '../reducers/greet.js';

const reducers = combineReducers({
  buttonClicked,
  greetRequested,
});

const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);

export default store;
