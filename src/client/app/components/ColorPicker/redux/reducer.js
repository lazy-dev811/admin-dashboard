import { COLOR_PICKER_SELECT_COLOR } from './actions';

const INITIAL_STATE = {
  data: {
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
  },
  config: {
    position: {
      right: 0,
      top: '50%',
    },
    components: {},
    dimensions: {},
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLOR_PICKER_SELECT_COLOR: {
      return {
        ...state,
        data: {
          colors: [...state.data.colors],
          activeColorName: action.selectedColorName,
        },
      };
    }

    default: {
      return state;
    }
  }
};
