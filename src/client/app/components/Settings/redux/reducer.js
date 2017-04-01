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
      name: 'optionShowWallpaperPicker',
      label: 'show wallpaper picker',
    },
    {
      name: 'optionTransparentScrollbars',
      label: 'transparent scrollbars',
    },
  ],
  initialValues: {
    optionDefaultUser: true,
    optionSlide: true,
    optionDefaultSlide: true,
    optionShowWallpaperPicker: false,
    optionTransparentScrollbars: false,
    testText: 'Content',
    testRadio: false,
    testRadio2: false,
    testCheckbox: true,
    testRange: 30,
    testNumber: 30,
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
