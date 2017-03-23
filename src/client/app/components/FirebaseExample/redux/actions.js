export const FIREBASE_FETCH_POSTS_REQUESTED = 'FIREBASE_FETCH_POSTS_REQUESTED';
export const FIREBASE_FETCH_POSTS_SUCCEEDED = 'FIREBASE_FETCH_POSTS_SUCCEEDED';
export const FIREBASE_FETCH_POSTS_FAILED = 'FIREBASE_FETCH_POSTS_FAILED';

export const FIREBASE_FETCH_POST_REQUESTED = 'FIREBASE_FETCH_POST_REQUESTED';
export const FIREBASE_FETCH_POST_SUCCEEDED = 'FIREBASE_FETCH_POST_SUCCEEDED';
export const FIREBASE_FETCH_POST_FAILED = 'FIREBASE_FETCH_POST_FAILED';

export const FIREBASE_ADD_POST_REQUESTED = 'FIREBASE_ADD_POST_REQUESTED';
export const FIREBASE_ADD_POST_SUCCEEDED = 'FIREBASE_ADD_POST_SUCCEEDED';
export const FIREBASE_ADD_POST_FAILED = 'FIREBASE_ADD_POST_FAILED';

export const FIREBASE_REMOVE_POST_REQUESTED = 'FIREBASE_REMOVE_POST_REQUESTED';
export const FIREBASE_REMOVE_POST_SUCCEEDED = 'FIREBASE_REMOVE_POST_SUCCEEDED';
export const FIREBASE_REMOVE_POST_FAILED = 'FIREBASE_REMOVE_POST_FAILED';

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';

export const firebaseFetchPostsRequested = () => ({
  type: FIREBASE_FETCH_POSTS_REQUESTED,
});

export const firebaseFetchPostsSucceeded = firebaseBlogPosts => ({
  type: FIREBASE_FETCH_POSTS_SUCCEEDED,
  firebaseBlogPosts,
});

export const firebaseFetchPostsFailed = firebaseBlogPosts => ({
  type: FIREBASE_FETCH_POSTS_FAILED,
  firebaseBlogPosts,
});


export const firebaseFetchPostRequested = postId => ({
  type: FIREBASE_FETCH_POST_REQUESTED,
  postId,
});

export const firebaseFetchPostSucceeded = firebaseActivePost => ({
  type: FIREBASE_FETCH_POST_SUCCEEDED,
  firebaseActivePost,
});

export const firebaseFetchPostFailed = error => ({
  type: FIREBASE_FETCH_POST_FAILED,
  error,
});


export const firebaseAddPostRequested = formValues => ({
  type: FIREBASE_ADD_POST_REQUESTED,
  formValues,
});

export const firebaseAddPostSucceeded = formValues => ({
  type: FIREBASE_ADD_POST_SUCCEEDED,
  formValues,
});

export const firebaseAddPostFailed = error => ({
  type: FIREBASE_ADD_POST_FAILED,
  error,
});


export const firebaseRemovePostRequested = postId => ({
  type: FIREBASE_REMOVE_POST_REQUESTED,
  postId,
});

export const firebaseRemovePostSucceeded = postId => ({
  type: FIREBASE_REMOVE_POST_SUCCEEDED,
  postId,
});

export const firebaseRemovePostFailed = postId => ({
  type: FIREBASE_REMOVE_POST_FAILED,
  postId,
});
