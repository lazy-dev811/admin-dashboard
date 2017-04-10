export const TOGGLE_ACTIVE_VIEW = 'TOGGLE_ACTIVE_VIEW';

export const GET_SOURCES_REQUESTED = 'GET_SOURCES_REQUESTED';
export const GET_SOURCES_SUCCEEDED = 'GET_SOURCES_SUCCEEDED';
export const GET_SOURCES_FAILED = 'GET_SOURCES_FAILED';

export const GET_ACTIVE_ARTICLES_REQUESTED = 'GET_ACTIVE_ARTICLES_REQUESTED';
export const GET_ACTIVE_ARTICLES_SUCCEEDED = 'GET_ACTIVE_ARTICLES_SUCCEEDED';
export const GET_ACTIVE_ARTICLES_FAILED = 'GET_ACTIVE_ARTICLES_FAILED';

export const TOGGLE_ACTIVE_CATEGORY_REQUESTED = 'TOGGLE_ACTIVE_CATEGORY_REQUESTED';
export const TOGGLE_ACTIVE_CATEGORY_SUCCEEDED = 'TOGGLE_ACTIVE_CATEGORY_SUCCEEDED';
export const TOGGLE_ACTIVE_CATEGORY_FAILED = 'TOGGLE_ACTIVE_CATEGORY_FAILED';

export const GET_ACTIVE_SOURCES_REQUESTED = 'GET_ACTIVE_SOURCES_REQUESTED';
export const GET_ACTIVE_SOURCES_SUCCEEDED = 'GET_ACTIVE_SOURCES_SUCCEEDED';
export const GET_ACTIVE_SOURCES_FAILED = 'GET_ACTIVE_SOURCES_FAILED';

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


export const getSourcesRequested = () => ({
  type: GET_SOURCES_REQUESTED,
});

export const getSourcesSucceeded = payload => ({
  type: GET_SOURCES_SUCCEEDED,
  payload,
});

export const getSourcesFailed = error => ({
  type: GET_SOURCES_FAILED,
  error,
});


export const getActiveArticlesRequested = activeSources => ({
  type: GET_ACTIVE_ARTICLES_REQUESTED,
  activeSources,
});

export const getActiveArticlesSucceeded = (payload, source) => ({
  type: GET_ACTIVE_ARTICLES_SUCCEEDED,
  payload,
  source,
});

export const getActiveArticlesFailed = error => ({
  type: GET_ACTIVE_ARTICLES_REQUESTED,
  error,
});


export const toggleActiveCategoryRequested = category => ({
  type: TOGGLE_ACTIVE_CATEGORY_REQUESTED,
  category,
});

export const toggleActiveCategorySucceeded = payload => ({
  type: TOGGLE_ACTIVE_CATEGORY_SUCCEEDED,
  payload,
});

export const toggleActiveCategoryFailed = error => ({
  type: TOGGLE_ACTIVE_CATEGORY_FAILED,
  error,
});


export const getActiveSourcesRequested = () => ({
  type: GET_ACTIVE_SOURCES_REQUESTED,
});

export const getActiveSourcesSucceeded = payload => ({
  type: GET_ACTIVE_SOURCES_SUCCEEDED,
  payload,
});

export const getActiveSourcesFailed = error => ({
  type: GET_ACTIVE_SOURCES_FAILED,
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


export const removeSourceRequested = id => ({
  type: REMOVE_SOURCE_REQUESTED,
  id,
});

export const removeSourceSucceeded = id => ({
  type: REMOVE_SOURCE_SUCCEEDED,
  id,
});

export const removeSourceFailed = error => ({
  type: REMOVE_SOURCE_FAILED,
  error,
});
