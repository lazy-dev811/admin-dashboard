import { connect } from 'react-redux';
import {
  fetchPostsRequested,
  addPostRequested,
  removePostRequested,
} from './actions';

import Blog from '../Blog.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetBlog }) => ({ ...widgetBlog });

const mergeProps = ({ data, config }, { dispatch }) => ({
  data,
  config,
  onFetchPosts(posts) {
    dispatch(fetchPostsRequested(posts));
  },
  onAddPost(post) {
    dispatch(addPostRequested(post));
  },
  onRemovePost(postId) {
    dispatch(removePostRequested(postId));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Blog));
