import { ADD_USER } from '../actions/index.js';

const initialState = {
  userAdded: false,
};

const addUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_USER':
      console.log('IN REDUCER')
      var newState = Object.assign({}, state)
      newState.userAdded = true;
      return newState;

    default:
      return state;
  }
}

export default addUserReducer;
