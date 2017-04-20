export const TOGGLE_ACTIVE_VIEW = 'TOGGLE_ACTIVE_VIEW';

export const REMOVE_ARTICLES = 'REMOVE_ARTICLES';

export const GET_SOURCES_FAILED = 'GET_SOURCES_FAILED';

export const GET_ACTIVE_SOURCES_FAILED = 'GET_ACTIVE_SOURCES_FAILED';

export const GET_FILTERED_SOURCES_FAILED = 'GET_FILTERED_SOURCES_FAILED';

export const GET_FILTERED_CATEGORIES_FAILED = 'GET_FILTERED_CATEGORIES_FAILED';

export const GET_SOURCE_LOGOS_FAILED = 'GET_SOURCE_LOGOS_FAILED';

export const SET_SOURCES = 'SET_SOURCES';

export const SET_VISIBLE_SOURCES = 'SET_VISIBLE_SOURCES';

export const SET_VISIBLE_ARTICLES = 'SET_VISIBLE_ARTICLES';

export const GET_SOURCES_AND_ARTICLES_REQUESTED = 'GET_SOURCES_AND_ARTICLES_REQUESTED';
export const GET_SOURCES_AND_ARTICLES_SUCCEEDED = 'GET_SOURCES_AND_ARTICLES_SUCCEEDED';
export const GET_SOURCES_AND_ARTICLES_FAILED = 'GET_SOURCES_AND_ARTICLES_FAILED';

export const ADD_FILTERED_CATEGORY_REQUESTED = 'ADD_FILTERED_CATEGORY_REQUESTED';
export const ADD_FILTERED_CATEGORY_SUCCEEDED = 'ADD_FILTERED_CATEGORY_SUCCEEDED';
export const ADD_FILTERED_CATEGORY_FAILED = 'ADD_FILTERED_CATEGORY_FAILED';

export const ADD_FILTERED_SOURCES_REQUESTED = 'ADD_FILTERED_SOURCES_REQUESTED';
export const ADD_FILTERED_SOURCES_SUCCEEDED = 'ADD_FILTERED_SOURCES_SUCCEEDED';
export const ADD_FILTERED_SOURCES_FAILED = 'ADD_FILTERED_SOURCES_FAILED';

export const REMOVE_FILTERED_CATEGORY_REQUESTED = 'REMOVE_FILTERED_CATEGORY_REQUESTED';
export const REMOVE_FILTERED_CATEGORY_SUCCEEDED = 'REMOVE_FILTERED_CATEGORY_SUCCEEDED';
export const REMOVE_FILTERED_CATEGORY_FAILED = 'REMOVE_FILTERED_CATEGORY_FAILED';

export const ADD_FILTERED_SOURCE_REQUESTED = 'ADD_FILTERED_SOURCE_REQUESTED';
export const ADD_FILTERED_SOURCE_SUCCEEDED = 'ADD_FILTERED_SOURCE_SUCCEEDED';
export const ADD_FILTERED_SOURCE_FAILED = 'ADD_FILTERED_SOURCE_FAILED';

export const REMOVE_FILTERED_SOURCE_REQUESTED = 'REMOVE_FILTERED_SOURCE_REQUESTED';
export const REMOVE_FILTERED_SOURCE_SUCCEEDED = 'REMOVE_FILTERED_SOURCE_SUCCEEDED';
export const REMOVE_FILTERED_SOURCE_FAILED = 'REMOVE_FILTERED_SOURCE_FAILED';

export const ADD_SOURCE_REQUESTED = 'ADD_SOURCE_REQUESTED';
export const ADD_SOURCE_SUCCEEDED = 'ADD_SOURCE_SUCCEEDED';
export const ADD_SOURCE_FAILED = 'ADD_SOURCE_FAILED';

export const REMOVE_SOURCE_REQUESTED = 'REMOVE_SOURCE_REQUESTED';
export const REMOVE_SOURCE_SUCCEEDED = 'REMOVE_SOURCE_SUCCEEDED';
export const REMOVE_SOURCE_FAILED = 'REMOVE_SOURCE_FAILED';


export const toggleActiveView = view => ({
  type: TOGGLE_ACTIVE_VIEW,
  view,
});


export const removeArticles = () => ({
  type: REMOVE_ARTICLES,
});


export const getSourcesFailed = error => ({
  type: GET_SOURCES_FAILED,
  error,
});


export const getActiveSourcesFailed = error => ({
  type: GET_ACTIVE_SOURCES_FAILED,
  error,
});


export const getFilteredCategoriesFailed = error => ({
  type: GET_FILTERED_CATEGORIES_FAILED,
  error,
});


export const getFilteredSourcesFailed = error => ({
  type: GET_FILTERED_SOURCES_FAILED,
  error,
});


export const setVisibleSources = () => ({
  type: SET_VISIBLE_SOURCES,
});


export const setVisibleArticles = () => ({
  type: SET_VISIBLE_ARTICLES,
});


export const setSources = data => ({
  type: SET_SOURCES,
  data,
});


export const getSourceLogosFailed = error => ({
  type: GET_SOURCE_LOGOS_FAILED,
  error,
});


export const getSourcesAndArticlesRequested = () => ({
  type: GET_SOURCES_AND_ARTICLES_REQUESTED,
});

export const getSourcesAndArticlesSucceeded = payload => ({
  type: GET_SOURCES_AND_ARTICLES_SUCCEEDED,
  payload,
});

export const getSourcesAndArticlesFailed = error => ({
  type: GET_SOURCES_AND_ARTICLES_FAILED,
  error,
});


export const addFilteredCategoryRequested = category => ({
  type: ADD_FILTERED_CATEGORY_REQUESTED,
  category,
});

export const addFilteredCategorySucceeded = payload => ({
  type: ADD_FILTERED_CATEGORY_SUCCEEDED,
  payload,
});

export const addFilteredCategoryFailed = error => ({
  type: ADD_FILTERED_CATEGORY_FAILED,
  error,
});


export const removeFilteredCategoryRequested = category => ({
  type: REMOVE_FILTERED_CATEGORY_REQUESTED,
  category,
});

export const removeFilteredCategorySucceeded = payload => ({
  type: REMOVE_FILTERED_CATEGORY_SUCCEEDED,
  payload,
});

export const removeFilteredCategoryFailed = error => ({
  type: REMOVE_FILTERED_CATEGORY_FAILED,
  error,
});


export const addFilteredSourceRequested = source => ({
  type: ADD_FILTERED_SOURCE_REQUESTED,
  source,
});

export const addFilteredSourceSucceeded = payload => ({
  type: ADD_FILTERED_SOURCE_SUCCEEDED,
  payload,
});

export const addFilteredSourceFailed = error => ({
  type: ADD_FILTERED_SOURCE_FAILED,
  error,
});


export const removeFilteredSourceRequested = source => ({
  type: REMOVE_FILTERED_SOURCE_REQUESTED,
  source,
});

export const removeFilteredSourceSucceeded = payload => ({
  type: REMOVE_FILTERED_SOURCE_SUCCEEDED,
  payload,
});

export const removeFilteredSourceFailed = error => ({
  type: REMOVE_FILTERED_SOURCE_FAILED,
  error,
});


export const addSourceRequested = source => ({
  type: ADD_SOURCE_REQUESTED,
  source,
});

export const addSourceSucceeded = (source, id) => ({
  type: ADD_SOURCE_SUCCEEDED,
  source,
  id,
});

export const addSourceFailed = error => ({
  type: ADD_SOURCE_FAILED,
  error,
});


export const removeSourceRequested = source => ({
  type: REMOVE_SOURCE_REQUESTED,
  source,
});

export const removeSourceSucceeded = source => ({
  type: REMOVE_SOURCE_SUCCEEDED,
  source,
});

export const removeSourceFailed = error => ({
  type: REMOVE_SOURCE_FAILED,
  error,
});
