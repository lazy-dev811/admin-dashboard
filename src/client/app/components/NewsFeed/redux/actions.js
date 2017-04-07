export const GET_NEWSFEEDS_REQUESTED = 'GET_NEWSFEEDS_REQUESTED';
export const GET_NEWSFEEDS_SUCCEEDED = 'GET_NEWSFEEDS_SUCCEEDED';
export const GET_NEWSFEEDS_FAILED = 'GET_NEWSFEEDS_FAILED';

export const ADD_NEWSFEED_REQUESTED = 'ADD_NEWSFEED_REQUESTED';
export const ADD_NEWSFEED_SUCCEEDED = 'ADD_NEWSFEED_SUCCEEDED';
export const ADD_NEWSFEED_FAILED = 'ADD_NEWSFEED_FAILED';

export const REMOVE_NEWSFEED_REQUESTED = 'REMOVE_NEWSFEED_REQUESTED';
export const REMOVE_NEWSFEED_SUCCEEDED = 'REMOVE_NEWSFEED_SUCCEEDED';
export const REMOVE_NEWSFEED_FAILED = 'REMOVE_NEWSFEED_FAILED';

export const getNewsFeedsRequested = () => ({
  type: GET_NEWSFEEDS_REQUESTED,
});

export const getNewsFeedsSucceeded = newsfeeds => ({
  type: GET_NEWSFEEDS_SUCCEEDED,
  newsfeeds,
});

export const getNewsFeedsFailed = error => ({
  type: GET_NEWSFEEDS_FAILED,
  error,
});


export const addNewsFeedRequested = newsFeed => ({
  type: ADD_NEWSFEED_REQUESTED,
  newsFeed,
});

export const addNewsFeedSucceeded = (newsFeed, id) => ({
  type: ADD_NEWSFEED_SUCCEEDED,
  newsFeed,
  id,
});

export const addNewsFeedFailed = error => ({
  type: ADD_NEWSFEED_FAILED,
  error,
});


export const removeNewsFeedRequested = id => ({
  type: REMOVE_NEWSFEED_REQUESTED,
  id,
});

export const removeNewsFeedSucceeded = id => ({
  type: REMOVE_NEWSFEED_SUCCEEDED,
  id,
});

export const removeNewsFeedFailed = error => ({
  type: REMOVE_NEWSFEED_FAILED,
  error,
});
