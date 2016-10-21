import {
  FETCH_POSTS_SUCCEEDED,
  FETCH_POST_SUCCEEDED,
  ADD_POST_SUCCEEDED,
  REMOVE_POST_SUCCEEDED,
} from './actions';

const INITIAL_STATE = {
  data: {
    blogPosts: [],
    activePost: undefined,
  },
  config: {
    components: {
      body: true,
    },
    dimensions: {
      width: 300,
      height: 300,
    },
    position: {
      bottom: 100,
      left: 40,
    },
    // transparentBg: true,
    transparentScrollbar: true,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCEEDED: {
      return {
        ...state,
        data: {
          blogPosts: action.blogPosts.data,
        },
      };
    }

    case FETCH_POST_SUCCEEDED: {
      const activePost = Object.assign(action.activePost);

      return {
        ...state,
        data: {
          ...state.data,
          activePost,
        },
      };
    }

    case ADD_POST_SUCCEEDED: {
      const newPost = Object.assign(action.formValues.data);

      return {
        ...state,
        data: {
          blogPosts: [
            ...state.data.blogPosts,
            newPost,
          ],
          activePost: newPost,
        },
      };
    }

    case REMOVE_POST_SUCCEEDED: {
      const postId = action.postId;
      const blogPosts = state.data.blogPosts.filter(blogPost => blogPost.id !== postId);

      return {
        ...state,
        data: {
          ...state.data,
          blogPosts,
        },
      };
    }

    default: {
      return state;
    }
  }
};
