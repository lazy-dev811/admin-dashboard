import { connect } from 'react-redux';
import {
  getSourcesRequested,
  addSourceRequested,
  removeSourceRequested,
} from './actions';

import NewsFeed from '../NewsFeed.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetNewsFeed, config }) => ({ ...widgetNewsFeed, ...config });

const mergeProps = ({ widgetIdentifier, sources, widgetNewsFeed, asyncStatus }, { dispatch }) => ({
  widgetIdentifier,
  sources,
  config: widgetNewsFeed,
  asyncStatus,
  getSources() {
    dispatch(getSourcesRequested());
  },
  removeSource(id) {
    dispatch(removeSourceRequested(id));
  },
  addSource(source) {
    dispatch(addSourceRequested(source));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(NewsFeed));
