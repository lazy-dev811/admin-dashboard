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
      toggledSource,
      toggleActiveSource,

      views,
      activeView,
      selectView,

      activeArticles = [],
      removeArticles,

      categories,
      activeCategories,
      toggleActiveCategories,

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
              activeCategories={activeCategories}
              toggleActiveCategories={toggleActiveCategories}
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
            filteredSources={filteredSources}
            activeCategories={activeCategories}
            toggleActiveCategories={toggleActiveCategories}
            toggledSource={toggledSource}
            toggleActiveSource={toggleActiveSource}
            asyncStatus={asyncStatus}
          />
        }

        {
          activeView === 'articles' &&
          <Articles
            activeArticles={activeArticles}
            activeSources={activeSources}
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
  filteredSources: PropTypes.array,
  toggledSource: PropTypes.object,

  activeArticles: PropTypes.array.isRequired,

  views: PropTypes.array.isRequired,
  activeView: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  getSourcesAndArticles: PropTypes.func.isRequired,

  removeArticles: PropTypes.func.isRequired,

  toggleActiveCategories: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  logoColors: PropTypes.object.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default NewsFeed;
