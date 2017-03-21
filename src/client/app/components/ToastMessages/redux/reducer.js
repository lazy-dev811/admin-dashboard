import { ADD_TOAST, BURN_TOAST } from './actions';

const INITIAL_STATE = {
  toasts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOAST: {
      return {
        ...state,
        toasts: [
          ...state.toasts,
          action.toast,
        ],
      };
    }
    case BURN_TOAST: {
      const newState = Object.assign(state, {});
      const burntToast = newState.toasts[action.toastIndex];
      burntToast.burnt = true;
      return {
        ...state,
        toasts: [
          ...state.toasts,
          burntToast,
        ],
      };
    }

    default: {
      return state;
    }
  }
};
