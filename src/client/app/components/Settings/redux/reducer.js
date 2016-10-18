import { UPDATE_SETTINGS } from './actions';

const INITIAL_STATE = {
  data: {
    settings: [
      {
        name: 'optionDefaultUser',
        label: 'Load default user',
        value: false,
      },
      {
        name: 'optionSlide',
        label: 'slide',
        value: false,
      },
      {
        name: 'optionDefaultSlide',
        label: 'slide automatically',
        value: false,
      },
      {
        name: 'optionShowColorPicker',
        label: 'show color picker',
        value: false,
      },
      {
        name: 'optionTransparentScrollbars',
        label: 'transparent scrollbars',
        value: false,
      },
    ],
  },
  config: {
    header: false,
    background: false,
    position: {
      top: 60,
      left: 500,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SETTINGS: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
