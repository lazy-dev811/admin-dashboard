import { returnUnique } from '../../../utils';

import {
  TOGGLE_ACTIVE_VIEW,

  REMOVE_ARTICLES,

  GET_SOURCES_SUCCEEDED,
  GET_SOURCES_FAILED,

  GET_ACTIVE_SOURCES_SUCCEEDED,
  GET_ACTIVE_SOURCES_FAILED,

  GET_FILTERED_CATEGORIES_SUCCEEDED,
  GET_FILTERED_CATEGORIES_FAILED,

  GET_FILTERED_SOURCES_SUCCEEDED,
  GET_FILTERED_SOURCES_FAILED,

  SET_VISIBLE_SOURCES,

  SET_VISIBLE_ARTICLES,

  SET_SOURCES,

  GET_SOURCE_LOGOS_SUCCEEDED,
  GET_SOURCE_LOGOS_FAILED,

  GET_SOURCES_AND_ARTICLES_REQUESTED,
  GET_SOURCES_AND_ARTICLES_SUCCEEDED,
  GET_SOURCES_AND_ARTICLES_FAILED,

  ADD_FILTERED_CATEGORY_REQUESTED,
  ADD_FILTERED_CATEGORY_SUCCEEDED,
  ADD_FILTERED_CATEGORY_FAILED,

  REMOVE_FILTERED_CATEGORY_REQUESTED,
  REMOVE_FILTERED_CATEGORY_SUCCEEDED,
  REMOVE_FILTERED_CATEGORY_FAILED,

  ADD_FILTERED_SOURCE_REQUESTED,
  ADD_FILTERED_SOURCE_SUCCEEDED,
  ADD_FILTERED_SOURCE_FAILED,

  REMOVE_FILTERED_SOURCE_REQUESTED,
  REMOVE_FILTERED_SOURCE_SUCCEEDED,
  REMOVE_FILTERED_SOURCE_FAILED,

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
  filteredSources: [],
  visibleSources: [],
  sourceLogos: [],
  toggledSource: {},

  activeArticles: [],
  visibleArticles: [],

  categories: [],
  filteredCategories: [],

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

    toggleFilteredCategory: {
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

    // case GET_SOURCES_SUCCEEDED: {
    //   const { sources } = action.payload.data;
    //   return {
    //     ...state,
    //     sources,
    //     categories: returnUnique(sources.map(source => source.category)),
    //   };
    // }

    case SET_SOURCES: {
      console.log(action.data);
      const { sources, filteredSources, sourceLogos, filteredCategories } = action.data;
      const filteredSources2 = Object.keys(filteredSources).map(source => filteredSources[source]);
      const sourceLogos2 = Object.keys(sourceLogos).map(id => ({
        id,
        url: sourceLogos[id],
      }));
      const sourcesMapped = sources.data.sources.map(source => ({
        ...source,
        logo: sourceLogos2.find(logo => logo.id === source.id).url,
      }));
      const filteredCategories2 = Object.keys(filteredCategories).map(category => filteredCategories[category]);

      return {
        ...state,
        sources: sourcesMapped,
        filteredSources: filteredSources2,
        categories: returnUnique(sources.data.sources.map(source => source.category)),
        filteredCategories: filteredCategories2,
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

      if (Object.keys(payload).length > 0) {
        activeSources = Object.keys(payload).map(source => payload[source]);
        activeView = 'sources';
      }
      return {
        ...state,
        activeSources,
        activeView,
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


    // case GET_FILTERED_CATEGORIES_SUCCEEDED: {
    //   const payload = action.payload || {};
    //   const filteredCategories = Object.keys(payload).map(category => payload[category]);

    //   return {
    //     ...state,
    //     filteredCategories,
    //   };
    // }


    // case GET_FILTERED_SOURCES_SUCCEEDED: {
    //   const payload = action.payload || {};
    //   const filteredSources = Object.keys(payload).map(source => payload[source]);

    //   return {
    //     ...state,
    //     filteredSources,
    //   };
    // }

    // case GET_FILTERED_CATEGORIES_FAILED: {
    //   return {
    //     ...state,
    //     asyncStatus: {
    //       ...state.asyncStatus,
    //       inProgress: false,
    //       error: true,
    //       errorMessage: action.error.message,
    //     },
    //   };
    // }


    case SET_VISIBLE_SOURCES: {
      const filteredCategories = state.filteredCategories;

      const isCategoryEqual = source => category => category === source.category;
      const filterSourcesByCategory = source => filteredCategories.findIndex(isCategoryEqual(source)) > -1;
      const visibleSources = state.sources.filter(filterSourcesByCategory);

      return {
        ...state,
        visibleSources,
      };
    }


    case SET_VISIBLE_ARTICLES: {
      const filteredSources = state.filteredSources;

      const isSourceEqual = activeArticle => source => source === activeArticle.source;
      const filterArtlcesBySource = activeArticle => filteredSources.findIndex(isSourceEqual(activeArticle)) > -1;
      const visibleArticles = state.activeArticles.filter(filterArtlcesBySource);

      return {
        ...state,
        visibleArticles,
      };
    }


    // case GET_SOURCE_LOGOS_SUCCEEDED: {
    //   const payload = action.payload;
    //   const sourceLogos = Object.keys(payload).map(id => ({
    //     id,
    //     url: payload[id],
    //   }));
    //   const sources = state.sources.map(source => ({
    //     ...source,
    //     logo: sourceLogos.find(logo => logo.id === source.id).url,
    //   }));

    //   return {
    //     ...state,
    //     sources,
    //   };
    // }


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
      // const addSource = article => ({
      //   source: article.source,
      //   ...article.articles,
      // });

      const sortByDate = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);
      const articles = action.payload.map(obj => obj.articles.map(article => ({
        source: obj.source,
        ...article,
      }))).join();

      const activeArticles = [
        // ...state.activeArticles,
        ...articles,
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


    case ADD_FILTERED_CATEGORY_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredCategory: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    // case ADD_FILTERED_CATEGORY_SUCCEEDED: {
    //   const filteredCategories = [
    //     ...state.filteredCategories,
    //     action.payload,
    //   ];
    //
    //   return {
    //     ...state,
    //     filteredCategories,
    //     asyncStatus: {
    //       ...state.asyncStatus,
    //       toggleFilteredCategory: {
    //         inProgress: false,
    //         error: false,
    //         errorMessage: undefined,
    //       },
    //     },
    //   };
    // }

    case ADD_FILTERED_CATEGORY_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredCategory: {
            inProgress: false,
            error: true,
            errorMessage: action.error.message,
          },
        },
      };
    }


    case REMOVE_FILTERED_CATEGORY_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredCategory: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case REMOVE_FILTERED_CATEGORY_SUCCEEDED: {
      return {
        ...state,
        filteredCategories: state.filteredCategories.filter(category => category !== action.payload),
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredCategory: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case REMOVE_FILTERED_CATEGORY_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredCategory: {
            inProgress: false,
            error: true,
            errorMessage: action.error.message,
          },
        },
      };
    }


    case ADD_FILTERED_SOURCE_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredSource: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case ADD_FILTERED_SOURCE_SUCCEEDED: {
      const filteredSources = [
        ...state.filteredSources,
        action.payload,
      ];

      return {
        ...state,
        filteredSources,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredSource: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case ADD_FILTERED_SOURCE_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredSource: {
            inProgress: false,
            error: true,
            errorMessage: action.error.message,
          },
        },
      };
    }


    case REMOVE_FILTERED_SOURCE_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredSource: {
            inProgress: true,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case REMOVE_FILTERED_SOURCE_SUCCEEDED: {
      return {
        ...state,
        filteredSources: state.filteredSources.filter(source => source !== action.payload),
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredSource: {
            inProgress: false,
            error: false,
            errorMessage: undefined,
          },
        },
      };
    }

    case REMOVE_FILTERED_SOURCE_FAILED: {
      return {
        ...state,
        asyncStatus: {
          ...state.asyncStatus,
          toggleFilteredSource: {
            inProgress: false,
            error: true,
            errorMessage: action.error.message,
          },
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
