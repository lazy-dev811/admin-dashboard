import { returnUnique } from '../../../utils';

import {
  TOGGLE_ACTIVE_VIEW,

  REMOVE_ARTICLES,

  GET_SOURCES_SUCCEEDED,
  GET_SOURCES_FAILED,

  GET_ACTIVE_SOURCES_SUCCEEDED,
  GET_ACTIVE_SOURCES_FAILED,

  GET_SOURCE_LOGOS_SUCCEEDED,
  GET_SOURCE_LOGOS_FAILED,

  GET_SOURCES_AND_ARTICLES_REQUESTED,
  GET_SOURCES_AND_ARTICLES_SUCCEEDED,
  GET_SOURCES_AND_ARTICLES_FAILED,

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
  sourceLogos: [],
  toggledSource: {},
  activeArticles: [],
  categories: [],
  activeCategories: [],
  views: ['sources', 'articles'],
  activeView: undefined,
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,

    toggleActiveSource: {
      inProgress: false,
      error: false,
      errorMessage: undefined,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_VIEW: {
      return {
        ...state,
        activeView: action.view,
      };
    }

    case REMOVE_ARTICLES: {
      return {
        ...state,
        activeArticles: INITIAL_STATE.activeArticles,
      };
    }

    case GET_SOURCES_SUCCEEDED: {
      const { sources } = action.payload.data;
      return {
        ...state,
        sources,
        categories: returnUnique(sources.map(source => source.category)),
        activeCategories: returnUnique(sources.map(source => source.category)),
      };
    }

    case GET_SOURCES_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case GET_ACTIVE_SOURCES_SUCCEEDED: {
      const payload = action.payload;
      let activeSources = [];
      let activeView = 'sources';
      let asyncStatus = {
        ...state.asyncStatus,
        inProgress: false,
        error: false,
        errorMessage: undefined,
      };

      if (Object.keys(payload).length > 0) {
        activeSources = Object.keys(payload).map(source => payload[source]);
        activeView = 'articles';
        asyncStatus = { ...state.asyncStatus };
      }
      return {
        ...state,
        activeSources,
        activeView,
        asyncStatus,
      };
    }

    case GET_ACTIVE_SOURCES_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case GET_SOURCE_LOGOS_SUCCEEDED: {
      const payload = action.payload;
      const sourceLogos = Object.keys(payload).map(id => ({
        id,
        url: payload[id],
      }));
      // console.log('state.sources', state.sources);
      const sources = state.sources.map(source => {
        console.log(sourceLogos.find(logo => logo.id === source.id));
        return ({
          ...source,
          logo: sourceLogos.find(logo => logo.id === source.id).url,
        });
      });

      return {
        ...state,
        sources,
        // sourceLogos,
      };
    }


    case GET_SOURCES_AND_ARTICLES_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_SOURCES_AND_ARTICLES_SUCCEEDED: {
      const addSource = article => ({
        source: action.source,
        ...article,
      });

      const sortByDate = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);

      const activeArticles = [
        ...state.activeArticles,
        ...action.payload.data.articles.map(addSource),
      ].sort(sortByDate);

      return {
        ...state,
        activeArticles,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_SOURCES_AND_ARTICLES_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case ADD_SOURCE_REQUESTED: {
      return {
        ...state,
        toggledSource: action.source,
        asyncStatus: {
          ...state.asyncStatus,
          toggleActiveSource: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
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
          ...state.asyncStatus,
          toggleActiveSource: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case ADD_SOURCE_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleActiveSource: {
            inProgress: false,
            error: true,
            errorMessage: action.error.message,
          },
        },
      };
    }


    case REMOVE_SOURCE_REQUESTED: {
      return {
        ...state,
        toggledSource: action.source,
        asyncStatus: {
          ...state.asyncStatus,
          toggleActiveSource: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case REMOVE_SOURCE_SUCCEEDED: {
      const activeSources = state.activeSources.filter(source => source.id !== action.source.id);

      return {
        ...state,
        activeSources,
        asyncStatus: {
          ...state.asyncStatus,
          toggleActiveSource: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case REMOVE_SOURCE_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleActiveSource: {
            inProgress: false,
            error: true,
            errorMessage: action.error.message,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};
