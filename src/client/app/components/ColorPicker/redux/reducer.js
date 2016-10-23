import { COLOR_PICKER_SELECT_COLOR } from './actions';

const INITIAL_STATE = {
  colors: [
    {
      name: 'red',
      code: 'red',
    },
    {
      name: 'yellow',
      code: 'yellow',
    },
    {
      name: 'green',
      code: 'green',
    },
    {
      name: 'blue',
      code: 'blue',
    },
    {
      name: 'orange',
      code: 'orange',
    },
    {
      name: 'purple',
      code: 'purple',
    },
  ],
  activeColorName: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLOR_PICKER_SELECT_COLOR: {
      return {
        ...state,
        colors: [...state.colors],
        activeColorName: action.selectedColorName,
      };
    }

    default: {
      return state;
    }
  }
};
