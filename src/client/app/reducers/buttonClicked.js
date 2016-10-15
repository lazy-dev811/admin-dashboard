import { BUTTON_CLICKED } from '../actions/index.js';

const initialState = {
  buttonHasBeenClicked: false,
};

const buttonClicked = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED:
      const newState = Object.assign({}, state);
      newState.buttonHasBeenClicked = action.buttonHasBeenClicked;
      return newState;

    default:
      return state;
  }
};

export default buttonClicked;
