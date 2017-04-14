export const TOGGLE_ACTIVE_VIEW = 'TOGGLE_ACTIVE_VIEW';

export const REMOVE_ARTICLES = 'REMOVE_ARTICLES';

export const GET_SOURCES_SUCCEEDED = 'GET_SOURCES_SUCCEEDED';
export const GET_SOURCES_FAILED = 'GET_SOURCES_FAILED';

export const GET_ACTIVE_SOURCES_SUCCEEDED = 'GET_ACTIVE_SOURCES_SUCCEEDED';
export const GET_ACTIVE_SOURCES_FAILED = 'GET_ACTIVE_SOURCES_FAILED';

export const GET_ACTIVE_CATEGORIES_SUCCEEDED = 'GET_ACTIVE_CATEGORIES_SUCCEEDED';
export const GET_ACTIVE_CATEGORIES_FAILED = 'GET_ACTIVE_CATEGORIES_FAILED';

export const FILTER_SOURCES = 'FILTER_SOURCES';

export const GET_SOURCE_LOGOS_SUCCEEDED = 'GET_SOURCE_LOGOS_SUCCEEDED';
export const GET_SOURCE_LOGOS_FAILED = 'GET_SOURCE_LOGOS_FAILED';

export const GET_SOURCES_AND_ARTICLES_REQUESTED = 'GET_SOURCES_AND_ARTICLES_REQUESTED';
export const GET_SOURCES_AND_ARTICLES_SUCCEEDED = 'GET_SOURCES_AND_ARTICLES_SUCCEEDED';
export const GET_SOURCES_AND_ARTICLES_FAILED = 'GET_SOURCES_AND_ARTICLES_FAILED';

export const ADD_ACTIVE_CATEGORY_REQUESTED = 'ADD_ACTIVE_CATEGORY_REQUESTED';
export const ADD_ACTIVE_CATEGORY_SUCCEEDED = 'ADD_ACTIVE_CATEGORY_SUCCEEDED';
export const ADD_ACTIVE_CATEGORY_FAILED = 'ADD_ACTIVE_CATEGORY_FAILED';

export const REMOVE_ACTIVE_CATEGORY_REQUESTED = 'REMOVE_ACTIVE_CATEGORY_REQUESTED';
export const REMOVE_ACTIVE_CATEGORY_SUCCEEDED = 'REMOVE_ACTIVE_CATEGORY_SUCCEEDED';
export const REMOVE_ACTIVE_CATEGORY_FAILED = 'REMOVE_ACTIVE_CATEGORY_FAILED';

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


export const getSourcesSucceeded = payload => ({
  type: GET_SOURCES_SUCCEEDED,
  payload,
});

export const getSourcesFailed = error => ({
  type: GET_SOURCES_FAILED,
  error,
});


export const getActiveSourcesSucceeded = payload => ({
  type: GET_ACTIVE_SOURCES_SUCCEEDED,
  payload,
});

export const getActiveSourcesFailed = error => ({
  type: GET_ACTIVE_SOURCES_FAILED,
  error,
});


export const getActiveCategoriesSucceeded = payload => ({
  type: GET_ACTIVE_CATEGORIES_SUCCEEDED,
  payload,
});

export const getActiveCategoriesFailed = error => ({
  type: GET_ACTIVE_CATEGORIES_FAILED,
  error,
});


export const filterSources = () => ({
  type: FILTER_SOURCES,
});


export const getSourceLogosSucceeded = payload => ({
  type: GET_SOURCE_LOGOS_SUCCEEDED,
  payload,
});

export const getSourceLogosFailed = error => ({
  type: GET_SOURCE_LOGOS_FAILED,
  error,
});


export const getSourcesAndArticlesRequested = () => ({
  type: GET_SOURCES_AND_ARTICLES_REQUESTED,
});

export const getSourcesAndArticlesSucceeded = (payload, source) => ({
  type: GET_SOURCES_AND_ARTICLES_SUCCEEDED,
  payload,
  source,
});

export const getSourcesAndArticlesFailed = error => ({
  type: GET_SOURCES_AND_ARTICLES_FAILED,
  error,
});


export const addActiveCategoryRequested = category => ({
  type: ADD_ACTIVE_CATEGORY_REQUESTED,
  category,
});

export const addActiveCategorySucceeded = payload => ({
  type: ADD_ACTIVE_CATEGORY_SUCCEEDED,
  payload,
});

export const addActiveCategoryFailed = error => ({
  type: ADD_ACTIVE_CATEGORY_FAILED,
  error,
});


export const removeActiveCategoryRequested = category => ({
  type: REMOVE_ACTIVE_CATEGORY_REQUESTED,
  category,
});

export const removeActiveCategorySucceeded = payload => ({
  type: REMOVE_ACTIVE_CATEGORY_SUCCEEDED,
  payload,
});

export const removeActiveCategoryFailed = error => ({
  type: REMOVE_ACTIVE_CATEGORY_FAILED,
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
