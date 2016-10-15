import { GREET_REQUESTED } from '../actions/index.js';

const initialState = {
  person: {
    name: 'Loading name',
  },
};

const greetRequested = (state = initialState, action) => {
  switch (action.type) {
    case GREET_REQUESTED:
      const newState = Object.assign({}, state);
      console.log('new state', newState)
      newState.person = {
        name: 'Vincent',
      };
      return newState;

    default:
      return state;
  }
};

export default greetRequested;
