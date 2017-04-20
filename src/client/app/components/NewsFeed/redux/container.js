import { connect } from 'react-redux';
import {
  toggleActiveView,
  removeArticles,
  getSourcesAndArticlesRequested,
  addFilteredCategoryRequested,
  removeFilteredCategoryRequested,
  addFilteredSourceRequested,
  removeFilteredSourceRequested,
  addSourceRequested,
  removeSourceRequested,
} from './actions';

import NewsFeed from '../NewsFeed.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

import logoColors from '../config.js';

const mapStateToProps = ({ widgetNewsFeed, config }) => ({ ...widgetNewsFeed, ...config });

const mergeProps = ({
  widgetIdentifier,
  sources,
  activeSources,
  visibleSources,
  filteredSources,
  toggledSource,

  activeArticles,
  visibleArticles,

  categories,
  filteredCategories,

  views,
  activeView,
  widgetNewsFeed,
  asyncStatus,
}, { dispatch }) => ({
  widgetIdentifier,
  sources,
  activeSources,
  visibleSources,
  filteredSources,
  toggledSource,

  activeArticles,
  visibleArticles,

  categories,
  filteredCategories,

  views,
  activeView,
  logoColors,
  config: widgetNewsFeed,
  asyncStatus,
  getSourcesAndArticles() {
    dispatch(getSourcesAndArticlesRequested());
  },
  removeArticles() {
    dispatch(removeArticles());
  },
  toggleFilteredCategories(selectedCategory) {
    if (filteredCategories.findIndex(category => category === selectedCategory) > -1) {
      dispatch(removeFilteredCategoryRequested(selectedCategory));
    } else {
      dispatch(addFilteredCategoryRequested(selectedCategory));
    }
  },
  toggleFilteredSources(selectedSource) {
    if (filteredSources.findIndex(source => source === selectedSource) > -1) {
      dispatch(removeFilteredSourceRequested(selectedSource));
    } else {
      dispatch(addFilteredSourceRequested(selectedSource));
    }
  },
  selectView(view) {
    dispatch(toggleActiveView(view));
  },
  toggleActiveSource(selectedSource) {
    if (activeSources.findIndex(source => source.id === selectedSource.id) > -1) {
      dispatch(removeSourceRequested(selectedSource, activeSources));
    } else {
      dispatch(addSourceRequested(selectedSource, activeSources));
    }
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(NewsFeed));
