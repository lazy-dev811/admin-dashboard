import { SLIDE_ITEM_SELECT } from './actions';

const INITIAL_STATE = {
  sliderItems: [
    'Todo',
    'Weather',
    'Youtube player',
    'Timer',
    'Medition',
    'Series',
    'Movies',
    'Bookmarks',
    'Social',
    'Music',
  ],
};

export default (state = INITIAL_STATE, dispatch) => {
  switch (dispatch.type) {
    case SLIDE_ITEM_SELECT: {
      console.log('slide', dispatch.slideItem);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};
