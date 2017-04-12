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
      toggledSource,

      views,
      activeView,
      activeArticles = [],
      categories,
      activeCategories,
      selectCategory,
      selectSort,
      selectView,
      toggleActiveSource,
      removeArticles,
      asyncStatus,
    } = this.props;
    const sortOptions = ['top', 'newest', 'best'];

    return (
      <div className="newsfeed">
        <div className="widget__header">
          News Feed

          <div className="newsfeed__options">
            {
              activeView === 'articles' &&
              <Filters
                categories={categories}
                activeCategories={activeCategories}
                sortOptions={sortOptions}
                selectCategory={selectCategory}
                selectSort={selectSort}
              />
            }

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
  toggledSource: PropTypes.object,

  activeArticles: PropTypes.array.isRequired,

  views: PropTypes.array.isRequired,
  activeView: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  getSourcesAndArticles: PropTypes.func.isRequired,
  removeArticles: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectSort: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default NewsFeed;
