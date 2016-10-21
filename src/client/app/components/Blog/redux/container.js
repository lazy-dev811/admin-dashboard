import { connect } from 'react-redux';
import {
  fetchPostsRequested,
  fetchPostRequested,
  addPostRequested,
  removePostRequested,
  updateSettings,
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
  onFetchPost(postId) {
    dispatch(fetchPostRequested(postId));
  },
  onRemovePost(postId) {
    dispatch(removePostRequested(postId));
  },
  onSubmit(formValues) {
    dispatch(addPostRequested(formValues));
  },
  onSettingsUpdate(settingToUpdate) {
    dispatch(updateSettings(settingToUpdate));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Blog, 'test'));
