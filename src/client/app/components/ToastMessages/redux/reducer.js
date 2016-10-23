import { BURN_TOAST } from './actions';

const INITIAL_STATE = {
  toasts: [
    {
      type: 'bad',
      message: 'This is an error message from api. The data could not be loaded',
    }, {
      type: 'info',
      message: 'This is an info message. Use still to be decided',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BURN_TOAST: {
      return {
        ...state,
        toasts: [
          ...state.toasts.slice(0, action.toastIndex),
          ...state.toasts.slice(action.toastIndex + 1),
        ],
      };
    }

    default: {
      return state;
    }
  }
};
