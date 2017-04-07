export const GET_SOURCES_REQUESTED = 'GET_SOURCES_REQUESTED';
export const GET_SOURCES_SUCCEEDED = 'GET_SOURCES_SUCCEEDED';
export const GET_SOURCES_FAILED = 'GET_SOURCES_FAILED';

export const ADD_SOURCE_REQUESTED = 'ADD_SOURCE_REQUESTED';
export const ADD_SOURCE_SUCCEEDED = 'ADD_SOURCE_SUCCEEDED';
export const ADD_SOURCE_FAILED = 'ADD_SOURCE_FAILED';

export const REMOVE_SOURCE_REQUESTED = 'REMOVE_SOURCE_REQUESTED';
export const REMOVE_SOURCE_SUCCEEDED = 'REMOVE_SOURCE_SUCCEEDED';
export const REMOVE_SOURCE_FAILED = 'REMOVE_SOURCE_FAILED';

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
