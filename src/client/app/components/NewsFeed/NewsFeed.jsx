import React, { Component, PropTypes } from 'react';

import Filters from './parts/Filters.jsx';
import Views from './parts/Views';
import List from './parts/List.jsx';

require('./NewsFeed.scss');

class NewsFeed extends Component {
  componentWillMount() {
    this.props.getSources();
  }

  render() {
    const {
      sources,
      activeSources,
      activeView,
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
            <Filters
              categories={categories}
              activeCategories={activeCategories}
              sortOptions={sortOptions}
              selectCategory={selectCategory}
              selectSort={selectSort}
            />
            <Views
              views={views}
              activeView={activeView}
              selectView={selectView}
            />
          </div>
        </div>
        <List sources={sources} activeSources={activeSources} toggleActiveSource={toggleActiveSource} />
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
  activeView: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  activeCategories: PropTypes.array.isRequired,
  getSources: PropTypes.func.isRequired,
  selectCategory: PropTypes.func.isRequired,
  selectSort: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
};

export default NewsFeed;
