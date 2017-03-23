import {
  FIREBASE_FETCH_POSTS_SUCCEEDED,
  FIREBASE_FETCH_POST_SUCCEEDED,
  FIREBASE_ADD_POST_SUCCEEDED,
  FIREBASE_REMOVE_POST_SUCCEEDED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetFirebaseExample',
  widgetName: 'FirebaseExample',
  firebaseBlogPosts: [],
  firebaseActivePost: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIREBASE_FETCH_POSTS_SUCCEEDED: {
      return {
        ...state,
        firebaseBlogPosts: action.firebaseBlogPosts.data,
      };
    }

    case FIREBASE_FETCH_POST_SUCCEEDED: {
      const firebaseActivePost = Object.assign(action.firebaseActivePost);

      return {
        ...state,
        firebaseActivePost,
      };
    }

    case FIREBASE_ADD_POST_SUCCEEDED: {
      const newPost = Object.assign(action.formValues.data);

      return {
        ...state,
        firebaseBlogPosts: [
          ...state.firebaseBlogPosts,
          newPost,
        ],
        firebaseActivePost: newPost,
      };
    }

    case FIREBASE_REMOVE_POST_SUCCEEDED: {
      const postId = action.postId;
      const firebaseBlogPosts = state.data.firebaseBlogPosts.filter(firebaseBlogPost => firebaseBlogPost.id !== postId);

      return {
        ...state,
        firebaseBlogPosts,
      };
    }

    default: {
      return state;
    }
  }
};
