import { WIDGET_BLOG } from '../../../constants/widgets.js';

import {
  FETCH_POSTS_SUCCEEDED,
  FETCH_POST_SUCCEEDED,
  ADD_POST_SUCCEEDED,
  REMOVE_POST_SUCCEEDED,
} from './actions';

const INITIAL_STATE = {
  widgetName: WIDGET_BLOG,
  blogPosts: [],
  activePost: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCEEDED: {
      return {
        ...state,
        blogPosts: action.blogPosts.data,
      };
    }

    case FETCH_POST_SUCCEEDED: {
      const activePost = Object.assign(action.activePost);

      return {
        ...state,
        activePost,
      };
    }

    case ADD_POST_SUCCEEDED: {
      const newPost = Object.assign(action.formValues.data);

      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          newPost,
        ],
        activePost: newPost,
      };
    }

    case REMOVE_POST_SUCCEEDED: {
      const postId = action.postId;
      const blogPosts = state.data.blogPosts.filter(blogPost => blogPost.id !== postId);

      return {
        ...state,
        blogPosts,
      };
    }

    default: {
      return state;
    }
  }
};
