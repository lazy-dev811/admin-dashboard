import {
  YOUTUBE_SEARCH_SUCCEEDED,
  YOUTUBE_SEARCH_FAILED,
} from './actions';

const INITIAL_STATE = {
  videos: [],
  activeVideo: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case YOUTUBE_SEARCH_SUCCEEDED: {
      return {
        ...state,
        searched: true,
      };
    }

    case YOUTUBE_SEARCH_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};
