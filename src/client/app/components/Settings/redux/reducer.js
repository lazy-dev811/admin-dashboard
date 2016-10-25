import { UPDATE_SETTINGS } from './actions';

const INITIAL_STATE = {
  settings: [
    {
      name: 'optionDefaultUser',
      label: 'Load default user',
    },
    {
      name: 'optionSlide',
      label: 'slide',
    },
    {
      name: 'optionDefaultSlide',
      label: 'slide automatically',
    },
    {
      name: 'optionShowColorPicker',
      label: 'show color picker',
    },
    {
      name: 'optionTransparentScrollbars',
      label: 'transparent scrollbars',
    },
  ],
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
