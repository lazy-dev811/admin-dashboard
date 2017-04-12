import { connect } from 'react-redux';
import {
  toggleActiveView,
  removeArticles,
  getSourcesAndArticlesRequested,
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
  toggledSource,
  activeArticles,
  categories,
  activeCategories,
  views,
  activeView,
  widgetNewsFeed,
  asyncStatus,
}, { dispatch }) => ({
  widgetIdentifier,
  sources,
  activeSources,
  toggledSource,
  activeArticles,
  categories,
  activeCategories,
  views,
  activeView,
  config: widgetNewsFeed,
  asyncStatus,
  getSourcesAndArticles() {
    dispatch(getSourcesAndArticlesRequested());
  },
  removeArticles() {
    dispatch(removeArticles());
  },
  selectCategory(category) {
    dispatch(toggleActiveCategoryRequested(category));
  },
  selectView(view) {
    dispatch(toggleActiveView(view));
  },
  selectSort(sort) {
    console.log('sort', sort);
  },
  toggleActiveSource(selectedSource) {
    if (activeSources.findIndex(source => source.id === selectedSource.id) > -1) {
      dispatch(removeSourceRequested(selectedSource));
    } else {
      dispatch(addSourceRequested(selectedSource));
    }
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(NewsFeed));
