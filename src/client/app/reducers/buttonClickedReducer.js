import { BUTTON_CLICKED } from '../actions/index.js';

const initialState = {
  buttonClicked: false
};

const buttonClickedReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'BUTTON_CLICKED':
      var newState = Object.assign({}, state)
      newState.buttonClicked = true;
      return newState;

    default:
      return state;
  }
}

export default buttonClickedReducer;
