import { BURN_TOAST } from './actions';

const INITIAL_STATE = {
  data: {
    toasts: [
      {
        type: 'bad',
        message: 'This is an error message from api. The data could not be loaded',
      }, {
        type: 'info',
        message: 'This is an info message. Use still to be decided',
      },
    ],
  },
  config: {
    header: false,
    background: false,
    position: {
      right: 20,
      top: 20,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BURN_TOAST: {
      return {
        ...state,
        data: {
          toasts: [
            ...state.data.toasts.slice(0, action.toastIndex),
            ...state.data.toasts.slice(action.toastIndex + 1),
          ],
        },
      };
    }

    default: {
      return state;
    }
  }
};
