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
    // case expression:

    default: {
      return state;
    }
  }
};
