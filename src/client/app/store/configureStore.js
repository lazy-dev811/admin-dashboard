import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import addUserReducer from '../reducers/addUserReducer.js';

const createStoreWithMiddleware = applyMiddleware(thunk);
const reducers = combineReducers({
  addUserReducer: addUserReducer
});

const store = createStore(
  reducers,
  createStoreWithMiddleware
);

export default store;
