// import { reducer as formReducer } from 'redux-form';
import {
  FETCH_POSTS_SUCCEEDED,
  ADD_POST_SUCCEEDED,
  REMOVE_POST_SUCCEEDED,
} from './actions';

const INITIAL_STATE = {
  data: {
    blogPosts: [],
    activePost: undefined,
    // form: formReducer,
  },
  config: {
    header: true,
    background: true,
    position: {
      top: 20,
      left: 40,
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCEEDED: {
      return {
        ...state,
        data: {
          blogPosts: action.blogPosts.data,
          activePost: action.blogPosts.data[0],
        },
      };
    }

    case ADD_POST_SUCCEEDED: {
      console.log('added', action.addedPost);
      return {
        ...state,
        data: {
          // blogPosts: action.blogPosts.data,
        },
      };
    }

    case REMOVE_POST_SUCCEEDED: {
      console.log('removed', action.postId);
      return {
        ...state,
        data: {
          // blogPosts: action.blogPosts.data,
        },
      };
    }

    default: {
      return state;
    }
  }
};
