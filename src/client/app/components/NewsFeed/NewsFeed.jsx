import React, { Component, PropTypes } from 'react';

import Filters from './parts/Filters.jsx';
import Views from './parts/Views';
import Sources from './parts/Sources.jsx';
import Articles from './parts/Articles.jsx';

require('./NewsFeed.scss');

class NewsFeed extends Component {
  componentWillMount() {
    this.props.getSources();
    this.props.getArticles();
  }

  render() {
    const {
      sources,
      activeSources,
      activeView,
      activeArticles = [],
      categories,
      activeCategories,
      selectCategory,
      selectSort,
      selectView,
      toggleActiveSource,
    } = this.props;
    const views = ['sources', 'articles'];
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
              activeView={activeView}
              selectView={selectView}
            />
          </div>
        </div>

        {
          activeView === 'sources' &&
          <Sources sources={sources} activeSources={activeSources} toggleActiveSource={toggleActiveSource} />
        }

        {
          activeView === 'articles' &&
          <Articles activeArticles={activeArticles} />
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
  activeArticles: PropTypes.array.isRequired,
  activeView: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  getSources: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectSort: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
};

export default NewsFeed;
