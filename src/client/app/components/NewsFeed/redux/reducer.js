import { returnUnique, objectKeys } from '../../../utils';
import { VIEW_SOURCES, VIEW_ARTICLES, VIEWS, ASYNC_STATUS } from '../constants';

import {
  SET_FILTERS,
  TOGGLE_ACTIVE_VIEW,
  GET_SOURCES_FAILED,
  GET_ACTIVE_SOURCES_FAILED,
  GET_FILTERED_SOURCES_FAILED,
  SET_ACTIVE_VIEW,
  SET_VISIBLE_SOURCES,
  SET_VISIBLE_ARTICLES,
  SET_SOURCES,
  GET_SOURCES_AND_FILTERS_REQUESTED,

  GET_ARTICLES_SUCCEEDED,
  GET_ARTICLES_FAILED,

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

export const INITIAL_STATE = {
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

  views: VIEWS,
  activeView: undefined,
  asyncStatus: ASYNC_STATUS,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTERS: return setFilters(state, action);
    case GET_FILTERED_SOURCES_FAILED: return getFilteredSourcesFailed(state);
    case GET_SOURCES_AND_FILTERS_REQUESTED: return getSourcesAndFiltersRequested(state);
    case SET_ACTIVE_VIEW: return setActiveView(state, action);
    case TOGGLE_ACTIVE_VIEW: return toggleActiveView(state, action);
    case SET_SOURCES: return setSources(state, action);
    case GET_SOURCES_FAILED: return getSourcesFailed(state, action);
    case GET_ACTIVE_SOURCES_FAILED: return getActiveSourcesFailed(state, action);
    case SET_VISIBLE_SOURCES: return setVisibleSources(state);
    case SET_VISIBLE_ARTICLES: return setVisibleArticles(state);
    case GET_ARTICLES_SUCCEEDED: return getArticlesSucceeded(state, action);
    case GET_ARTICLES_FAILED: return getArticlesFailed(state, action);
    case ADD_FILTERED_CATEGORY_REQUESTED: return addFilteredCategoryRequested(state);
    case ADD_FILTERED_CATEGORY_SUCCEEDED: return addFilteredCategorySucceeded(state, action);
    case ADD_FILTERED_CATEGORY_FAILED: return addFilteredCategoryFailed(state, action);
    case REMOVE_FILTERED_CATEGORY_REQUESTED: return removeFilteredCategoryRequested(state);
    case REMOVE_FILTERED_CATEGORY_SUCCEEDED: return removeFilteredCategorySucceeded(state, action);
    case REMOVE_FILTERED_CATEGORY_FAILED: return removeFilteredCategoryFailed(state, action);
    case ADD_FILTERED_SOURCE_REQUESTED: return addFilteredSourceRequested(state);
    case ADD_FILTERED_SOURCE_SUCCEEDED: return addFilteredSourceSucceeded(state, action);
    case ADD_FILTERED_SOURCE_FAILED: return addFilteredSourceFailed(state, action);
    case REMOVE_FILTERED_SOURCE_REQUESTED: return removeFilteredSourceRequested(state);
    case REMOVE_FILTERED_SOURCE_SUCCEEDED: return removeFilteredSourceSucceeded(state, action);
    case REMOVE_FILTERED_SOURCE_FAILED: return removeFilteredSourceFailed(state, action);
    case ADD_SOURCE_REQUESTED: return addSourceRequested(state, action);
    case ADD_SOURCE_SUCCEEDED: return addSourceSucceeded(state, action);
    case ADD_SOURCE_FAILED: return addSourceFailed(state, action);
    case REMOVE_SOURCE_REQUESTED: return removeSourceRequested(state, action);
    case REMOVE_SOURCE_SUCCEEDED: return removeSourceSucceeded(state, action);
    case REMOVE_SOURCE_FAILED: return removeSourceFailed(state, action);

    default: {
      return state;
    }
  }
};

export function setFilters(state, action) {
  const { filteredSources, filteredCategories } = action.filters;
  const filteredSourcesMapped = objectKeys(filteredSources).map(source => filteredSources[source]);
  const filteredCategoriesMapped = objectKeys(filteredCategories).map(category => filteredCategories[category]);

  return {
    ...state,
    filteredSources: filteredSourcesMapped,
    filteredCategories: filteredCategoriesMapped,
  };
}

export function getFilteredSourcesFailed(state) {
  return {
    ...state,
    asyncStatus: {
      ...state.asyncStatus,
      error: true,
      errorMessage: 'Could not load filtered sources',
      getFilteredSources: {
        inProgress: false,
      },
    },
  };
}

export function getSourcesAndFiltersRequested(state) {
  return {
    ...state,
    asyncStatus: {
      ...state.asyncStatus,
      inProgress: true,
    },
  };
}

export function setActiveView(state, action) {
  const activeView = action.activeSourcesKeys.length ? VIEW_ARTICLES : VIEW_SOURCES;

  return {
    ...state,
    activeView,
  };
}

export function toggleActiveView(state, action) {
  return {
    ...state,
    activeView: action.view,
  };
}

export function setSources(state, action) {
  const { sources, activeSources, sourceLogos } = action.data;
  const sourcesMapped = sources.data.sources.map(source => ({ ...source, logo: sourceLogos[source.id] }));
  const activeSourcesMapped = objectKeys(activeSources).map(source => activeSources[source]);
  const categoriesMapped = returnUnique(sources.data.sources.map(source => source.category));

  return {
    ...state,
    sources: sourcesMapped,
    activeSources: activeSourcesMapped,
    categories: categoriesMapped,
    asyncStatus: {
      ...state.asyncStatus,
      inProgress: false,
    },
  };
}

export function getSourcesFailed(state, action) {
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

export function getActiveSourcesFailed(state, action) {
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

export function setVisibleSources(state) {
  const filteredCategories = state.filteredCategories;

  const isCategoryEqual = source => category => category === source.category;
  const filterSourcesByCategory = source => filteredCategories.findIndex(isCategoryEqual(source)) > -1;
  const visibleSources = state.sources.filter(filterSourcesByCategory);

  return {
    ...state,
    visibleSources,
  };
}

export function setVisibleArticles(state) {
  const isSourceEqual = article => source => source === article.source;
  const filterArtlces = article => state.filteredSources.findIndex(isSourceEqual(article)) > -1;
  const visibleArticles = state.activeArticles.filter(filterArtlces);

  return {
    ...state,
    visibleArticles,
  };
}

export function getArticlesSucceeded(state, action) {
  const isSourceEqual = article => source => source === article.source;
  const filterArtlces = article => (
    state.filteredSources.length ? state.filteredSources.findIndex(isSourceEqual(article)) > -1 : article
  );

  const sortByDate = (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt);
  const mapToModel = obj => obj.articles.map(article => ({
    source: obj.source,
    ...article,
  }));

  const activeArticles = action.payload
    .map(mapToModel)
    .reduce((acc, val) => acc.concat(val))
    .sort(sortByDate);
  const visibleArticles = activeArticles.filter(filterArtlces);

  return {
    ...state,
    activeArticles,
    visibleArticles,
    asyncStatus: {
      ...state.asyncStatus,
      inProgress: false,
    },
  };
}

export function getArticlesFailed(state, action) {
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

export function addFilteredCategoryRequested(state) {
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

export function addFilteredCategorySucceeded(state, action) {
  const filteredCategories = [
    ...state.filteredCategories,
    action.payload,
  ];

  return {
    ...state,
    filteredCategories,
    asyncStatus: {
      ...state.asyncStatus,
      toggleFilteredCategory: {
        inProgress: false,
      },
    },
  };
}

export function addFilteredCategoryFailed(state, action) {
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

export function removeFilteredCategoryRequested(state) {
  return {
    ...state,
    asyncStatus: {
      ...state.asyncStatus,
      toggleFilteredCategory: {
        inProgress: true,
      },
    },
  };
}

export function removeFilteredCategorySucceeded(state, action) {
  return {
    ...state,
    filteredCategories: state.filteredCategories.filter(category => category !== action.payload),
    asyncStatus: {
      ...state.asyncStatus,
      toggleFilteredCategory: {
        inProgress: false,
      },
    },
  };
}

export function removeFilteredCategoryFailed(state, action) {
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

export function addFilteredSourceRequested(state) {
  return {
    ...state,
    asyncStatus: {
      ...state.asyncStatus,
      toggleFilteredSource: {
        inProgress: true,
      },
    },
  };
}

export function addFilteredSourceSucceeded(state, action) {
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
      },
    },
  };
}

export function addFilteredSourceFailed(state, action) {
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

export function removeFilteredSourceRequested(state) {
  return {
    ...state,
    asyncStatus: {
      ...state.asyncStatus,
      toggleFilteredSource: {
        inProgress: true,
      },
    },
  };
}

export function removeFilteredSourceSucceeded(state, action) {
  return {
    ...state,
    filteredSources: state.filteredSources.filter(source => source !== action.payload),
    asyncStatus: {
      ...state.asyncStatus,
      toggleFilteredSource: {
        inProgress: false,
      },
    },
  };
}

export function removeFilteredSourceFailed(state, action) {
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

export function addSourceRequested(state, action) {
  return {
    ...state,
    toggledSource: action.source,
    asyncStatus: {
      ...state.asyncStatus,
      toggleActiveSource: {
        inProgress: true,
      },
    },
  };
}

export function addSourceSucceeded(state, action) {
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
      },
    },
  };
}

export function addSourceFailed(state, action) {
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

export function removeSourceRequested(state, action) {
  return {
    ...state,
    toggledSource: action.source,
    asyncStatus: {
      ...state.asyncStatus,
      toggleActiveSource: {
        inProgress: true,
      },
    },
  };
}

export function removeSourceSucceeded(state, action) {
  const activeSources = state.activeSources.filter(source => source.id !== action.id);

  return {
    ...state,
    activeSources,
    asyncStatus: {
      ...state.asyncStatus,
      toggleActiveSource: {
        inProgress: false,
      },
    },
  };
}

export function removeSourceFailed(state, action) {
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
