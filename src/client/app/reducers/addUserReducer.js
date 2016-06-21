import { ADD_USER } from '../actions/index.js';

const initialState = {
  user: '',
};

const addUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      var newState = Object.assign({}, state)
      newState.user = action.user;
      return newState;

    default:
      return state;
  }
}

export default addUserReducer;
