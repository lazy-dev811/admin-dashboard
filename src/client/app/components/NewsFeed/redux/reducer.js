import {
  GET_NEWSFEEDS_REQUESTED,
  GET_NEWSFEEDS_SUCCEEDED,
  GET_NEWSFEEDS_FAILED,

  ADD_NEWSFEED_REQUESTED,
  ADD_NEWSFEED_SUCCEEDED,
  ADD_NEWSFEED_FAILED,

  REMOVE_NEWSFEED_REQUESTED,
  REMOVE_NEWSFEED_SUCCEEDED,
  REMOVE_NEWSFEED_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetNewsFeed',
  widgetName: 'NewsFeed',
  newsfeeds: [],
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NEWSFEEDS_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_NEWSFEEDS_SUCCEEDED: {
      return {
        ...state,
        newsfeeds: Object.keys(action.newsfeeds).map(newsfeed => action.newsfeeds[newsfeed]) || [],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_NEWSFEEDS_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case ADD_NEWSFEED_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case ADD_NEWSFEED_SUCCEEDED: {
      const newNewsFeed = Object.assign(action.formValues);
      newNewsFeed.id = action.id;

      return {
        ...state,
        newsfeeds: [
          ...state.newsfeeds,
          newNewsFeed,
        ],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case ADD_NEWSFEED_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case REMOVE_NEWSFEED_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case REMOVE_NEWSFEED_SUCCEEDED: {
      const newsfeeds = state.newsfeeds.filter(newsfeed => newsfeed.id !== action.id);

      return {
        ...state,
        newsfeeds,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case REMOVE_NEWSFEED_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }

    default: {
      return state;
    }
  }
};
