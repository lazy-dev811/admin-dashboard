export const YOUTUBE_SEARCH_REQUESTED = 'YOUTUBE_SEARCH_REQUESTED';
export const YOUTUBE_SEARCH_SUCCEEDED = 'YOUTUBE_SEARCH_SUCCEEDED';
export const YOUTUBE_SEARCH_FAILED = 'YOUTUBE_SEARCH_FAILED';

export const youtubeSearchRequested = searchQuery => ({
  type: YOUTUBE_SEARCH_REQUESTED,
  searchQuery,
});

export const youtubeSearchSucceeded = data => ({
  type: YOUTUBE_SEARCH_SUCCEEDED,
  data,
});

export const youtubeSearchFailed = error => ({
  type: YOUTUBE_SEARCH_FAILED,
  error,
});
