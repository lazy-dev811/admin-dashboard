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

const mapStateToProps = ({ widgetBlog, config }) => ({ ...widgetBlog, ...config });

const mergeProps = ({ widgetName, blogPosts, activePost, widgetBlog }, { dispatch }) => ({
  widgetName,
  blogPosts,
  activePost,
  config: widgetBlog,
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
  onChange(formValues) {
    // dispatch(addPostRequested(formValues));
  },
  onSettingsUpdate(settingToUpdate) {
    dispatch(updateSettings(settingToUpdate));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Blog));
