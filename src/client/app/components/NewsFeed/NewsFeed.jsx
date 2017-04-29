import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

import Filters from './parts/Filters.jsx';
import Views from './parts/Views';
import Sources from './parts/Sources.jsx';
import Articles from './parts/Articles.jsx';

import { COLOR_WHITE } from '../../styles';

const NewsFeedWrap = styled.div`
  background-color: ${COLOR_WHITE};
`;

const Options = styled.div`
  display: flex;
  text-transform: none;
`;

class NewsFeed extends Component {
  componentWillMount() {
    this.props.getSourcesAndFilters();
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
      <NewsFeedWrap>
        <div className="widget__header">
          News Feed

          <Options>
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
          </Options>
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
      </NewsFeedWrap>
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
  getSourcesAndFilters: PropTypes.func.isRequired,

  removeArticles: PropTypes.func.isRequired,

  toggleFilteredCategories: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  logoColors: PropTypes.object.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default NewsFeed;
