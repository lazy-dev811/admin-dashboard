import { connect } from 'react-redux';
import {
  getSourcesRequested,
  getActiveSourcesRequested,
  addSourceRequested,
  removeSourceRequested,
} from './actions';

import NewsFeed from '../NewsFeed.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetNewsFeed, config }) => ({ ...widgetNewsFeed, ...config });

const mergeProps = ({ widgetIdentifier, sources, activeSources, widgetNewsFeed, asyncStatus }, { dispatch }) => ({
  widgetIdentifier,
  sources,
  activeSources,
  config: widgetNewsFeed,
  asyncStatus,
  getSources() {
    dispatch(getSourcesRequested());
    dispatch(getActiveSourcesRequested());
  },
  toggleActiveSource(selectedSource) {
    if (activeSources.findIndex(source => source.id === selectedSource.id) > -1) {
      dispatch(removeSourceRequested(selectedSource.id));
    } else {
      dispatch(addSourceRequested(selectedSource));
    }
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(NewsFeed));
