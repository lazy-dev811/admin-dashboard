import { connect } from 'react-redux';
import {
  getSourcesRequested,
  getActiveSourcesRequested,
  toggleActiveCategoryRequested,
  addSourceRequested,
  removeSourceRequested,
} from './actions';

import NewsFeed from '../NewsFeed.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetNewsFeed, config }) => ({ ...widgetNewsFeed, ...config });

const mergeProps = ({
  widgetIdentifier,
  sources,
  activeSources,
  categories,
  activeCategories,
  displayArticles,
  widgetNewsFeed,
  asyncStatus,
}, { dispatch }) => ({
  widgetIdentifier,
  sources,
  activeSources,
  categories,
  activeCategories,
  config: widgetNewsFeed,
  asyncStatus,
  getSources() {
    dispatch(getSourcesRequested());
    dispatch(getActiveSourcesRequested());
  },
  selectCategory(category) {
    dispatch(toggleActiveCategoryRequested(category));
    console.log('category', category);
  },
  selectSort(sort) {
    console.log('sort', sort);
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
