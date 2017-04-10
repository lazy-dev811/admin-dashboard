import { connect } from 'react-redux';
import {
  getSourcesRequested,
  getActiveSourcesRequested,
  getActiveArticlesRequested,
  toggleActiveCategoryRequested,
  addSourceRequested,
  removeSourceRequested,
  toggleActiveView,
} from './actions';

import NewsFeed from '../NewsFeed.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetNewsFeed, config }) => ({ ...widgetNewsFeed, ...config });

const mergeProps = ({
  widgetIdentifier,
  sources,
  activeSources,
  activeArticles,
  categories,
  activeCategories,
  activeView,
  widgetNewsFeed,
  asyncStatus,
}, { dispatch }) => ({
  widgetIdentifier,
  sources,
  activeSources,
  activeArticles,
  categories,
  activeCategories,
  activeView,
  config: widgetNewsFeed,
  asyncStatus,
  getSources() {
    dispatch(getSourcesRequested());
    dispatch(getActiveSourcesRequested());
  },
  getArticles() {
    console.log('activeSources', activeSources);
    dispatch(getActiveArticlesRequested());
  },
  selectCategory(category) {
    dispatch(toggleActiveCategoryRequested(category));
    console.log('category', category);
  },
  selectView(view) {
    dispatch(toggleActiveView(view));
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
