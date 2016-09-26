import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import buttonClickedReducer from '../reducers/buttonClickedReducer.js';

// const createStoreWithMiddleware = applyMiddleware(thunk);

const reducers = combineReducers({
  buttonClickedReducer: buttonClickedReducer,
});

const store = createStore(
  reducers
  // createStoreWithMiddleware
);

export default store;
