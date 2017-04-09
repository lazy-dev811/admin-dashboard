import {
  GET_SOURCES_REQUESTED,
  GET_SOURCES_SUCCEEDED,
  GET_SOURCES_FAILED,

  GET_ACTIVE_SOURCES_REQUESTED,
  GET_ACTIVE_SOURCES_SUCCEEDED,
  GET_ACTIVE_SOURCES_FAILED,

  ADD_SOURCE_REQUESTED,
  ADD_SOURCE_SUCCEEDED,
  ADD_SOURCE_FAILED,

  REMOVE_SOURCE_REQUESTED,
  REMOVE_SOURCE_SUCCEEDED,
  REMOVE_SOURCE_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetNewsFeed',
  widgetName: 'NewsFeed',
  sources: [],
  activeSources: [],
  displayArticles: true,
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SOURCES_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_SOURCES_SUCCEEDED: {
      return {
        ...state,
        sources: action.payload.data.sources,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_SOURCES_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case GET_ACTIVE_SOURCES_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_ACTIVE_SOURCES_SUCCEEDED: {
      const activeSources = Object.keys(action.payload).map(source => action.payload[source]);
      return {
        ...state,
        activeSources,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_ACTIVE_SOURCES_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case ADD_SOURCE_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case ADD_SOURCE_SUCCEEDED: {
      return {
        ...state,
        activeSources: [
          ...state.activeSources,
          action.source,
        ],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case ADD_SOURCE_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case REMOVE_SOURCE_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case REMOVE_SOURCE_SUCCEEDED: {
      const activeSources = state.activeSources.filter(source => source.id !== action.id);

      return {
        ...state,
        activeSources,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case REMOVE_SOURCE_FAILED: {
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
