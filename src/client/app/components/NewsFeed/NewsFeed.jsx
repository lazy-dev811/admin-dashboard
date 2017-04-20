import React, { Component, PropTypes } from 'react';

import Filters from './parts/Filters.jsx';
import Views from './parts/Views';
import Sources from './parts/Sources.jsx';
import Articles from './parts/Articles.jsx';

require('./NewsFeed.scss');

class NewsFeed extends Component {
  componentWillMount() {
    console.log('mounting');
    this.props.getSourcesAndArticles();
  }

  render() {
    const {
      sources,
      activeSources,
      filteredSources,
      visibleSources,
      toggledSource,
      toggleActiveSource,
      toggleFilteredSources,

      views,
      activeView,
      selectView,

      activeArticles = [],
      visibleArticles = [],
      removeArticles,

      categories,
      filteredCategories,
      toggleFilteredCategories,

      logoColors,

      asyncStatus,
    } = this.props;

    return (
      <div className="newsfeed">
        <div className="widget__header">
          News Feed

          <div className="newsfeed__options">
            <Filters
              categories={categories}
              filteredCategories={filteredCategories}
              toggleFilteredCategories={toggleFilteredCategories}
              activeSources={activeSources}
              filteredSources={filteredSources}
              toggleFilteredSources={toggleFilteredSources}
              activeView={activeView}
            />

            <Views
              views={views}
              activeSources={activeSources}
              activeView={activeView}
              selectView={selectView}
            />
          </div>
        </div>

        {
          activeView === 'sources' &&
          <Sources
            sources={sources}
            activeSources={activeSources}
            visibleSources={visibleSources}
            filteredCategories={filteredCategories}
            toggleFilteredCategories={toggleFilteredCategories}
            toggledSource={toggledSource}
            toggleActiveSource={toggleActiveSource}
            asyncStatus={asyncStatus}
          />
        }

        {
          activeView === 'articles' &&
          <Articles
            activeArticles={activeArticles}
            visibleArticles={visibleArticles}
            filteredSources={filteredSources}
            logoColors={logoColors}
            removeArticles={removeArticles}
          />
        }
      </div>
    );
  }
}

NewsFeed.defaultProps = {
  sources: [],
};

NewsFeed.propTypes = {
  sources: PropTypes.array.isRequired,
  activeSources: PropTypes.array,
  filteredSources: PropTypes.array.isRequired,
  visibleSources: PropTypes.array,
  toggledSource: PropTypes.object,
  toggleFilteredSources: PropTypes.func.isRequired,

  activeArticles: PropTypes.array.isRequired,
  visibleArticles: PropTypes.array.isRequired,

  views: PropTypes.array.isRequired,
  activeView: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  filteredCategories: PropTypes.array.isRequired,
  getSourcesAndArticles: PropTypes.func.isRequired,

  removeArticles: PropTypes.func.isRequired,

  toggleFilteredCategories: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  logoColors: PropTypes.object.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default NewsFeed;
