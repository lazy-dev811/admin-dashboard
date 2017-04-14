import { connect } from 'react-redux';
import {
  toggleActiveView,
  removeArticles,
  getSourcesAndArticlesRequested,
  addActiveCategoryRequested,
  removeActiveCategoryRequested,
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
  filteredSources,
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
  filteredSources,
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
  toggleActiveCategories(selectedCategory) {
    if (activeCategories.findIndex(category => category === selectedCategory) > -1) {
      dispatch(removeActiveCategoryRequested(selectedCategory));
    } else {
      dispatch(addActiveCategoryRequested(selectedCategory));
    }
  },
  selectView(view) {
    dispatch(toggleActiveView(view));
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
