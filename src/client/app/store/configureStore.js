import { createStore, applyMiddleware, combineReducers } from 'redux';

import buttonClickedReducer from '../reducers/buttonClickedReducer.js';

const reducers = combineReducers({
  buttonClickedReducer: buttonClickedReducer,
});

const store = createStore(
  reducers
);

export default store;
