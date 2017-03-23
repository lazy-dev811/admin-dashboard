import { connect } from 'react-redux';
import {
  firebaseFetchPostsRequested,
  firebseFetchPostRequested,
  firebaseAddPostRequested,
  firebaseRemovePostRequested,
} from './actions';

import FirebaseExample from '../FirebaseExample.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetFirebaseExample, config }) => ({ ...widgetFirebaseExample, ...config });

const mergeProps = ({ widgetIdentifier, firebaseBlogPosts, firebaseActivePost, widgetFirebaseExample }, { dispatch }) => {
  console.log('firebaseActivePost', firebaseActivePost);
  return ({
    widgetIdentifier,
    firebaseBlogPosts,
    firebaseActivePost,
    config: widgetFirebaseExample,
    onFetchPosts(posts) {
      dispatch(firebaseFetchPostsRequested(posts));
    },
    onFetchPost(postId) {
      dispatch(firebseFetchPostRequested(postId));
    },
    onRemovePost(postId) {
      dispatch(firebaseRemovePostRequested(postId));
    },
    onSubmit(formValues) {
      dispatch(firebaseAddPostRequested(formValues));
    },
    onChange() {},
  });
};

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(FirebaseExample));
