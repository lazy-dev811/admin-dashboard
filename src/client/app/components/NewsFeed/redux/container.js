import { connect } from 'react-redux';
import {
  getNewsFeedsRequested,
  addNewsFeedRequested,
  removeNewsFeedRequested,
} from './actions';

import NewsFeed from '../NewsFeed.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetNewsFeed, config }) => ({ ...widgetNewsFeed, ...config });

const mergeProps = ({ widgetIdentifier, newsfeeds, widgetNewsFeed, asyncStatus }, { dispatch }) => ({
  widgetIdentifier,
  newsfeeds,
  config: widgetNewsFeed,
  asyncStatus,
  gethNewsFeeds(newsfeedsToGet) {
    dispatch(getNewsFeedsRequested(newsfeedsToGet));
  },
  removeNewsFeed(id) {
    dispatch(removeNewsFeedRequested(id));
  },
  addNewsFeed(newsfeed) {
    dispatch(addNewsFeedRequested(newsfeed));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(NewsFeed));
