import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Filters from './parts/Filters.jsx';
import Views from './parts/Views';
import Sources from './parts/Sources.jsx';
import Articles from './parts/Articles.jsx';

import {
  SHAPE_SOURCE,
  SHAPE_ACTIVE_SOURCE,
  SHAPE_VISIBLE_SOURCE,
  SHAPE_TOGGLED_SOURCE,
  SHAPE_ARTICLE,
  SHAPE_VISIBLE_ARTICLE,
} from './prop-shapes';

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
            toggleFilteredSources={toggleFilteredSources}
            logoColors={logoColors}
            asyncStatus={asyncStatus}
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
  sources: PropTypes.arrayOf(SHAPE_SOURCE).isRequired,
  activeSources: PropTypes.arrayOf(SHAPE_ACTIVE_SOURCE).isRequired,
  filteredSources: PropTypes.arrayOf(PropTypes.string).isRequired,
  visibleSources: PropTypes.arrayOf(SHAPE_VISIBLE_SOURCE).isRequired,
  toggledSource: SHAPE_TOGGLED_SOURCE.isRequired,
  toggleFilteredSources: PropTypes.func.isRequired,

  activeArticles: PropTypes.arrayOf(SHAPE_ARTICLE).isRequired,
  visibleArticles: PropTypes.arrayOf(SHAPE_VISIBLE_ARTICLE).isRequired,

  views: PropTypes.array.isRequired,
  activeView: PropTypes.string,
  categories: PropTypes.array.isRequired,
  filteredCategories: PropTypes.array.isRequired,
  getSourcesAndFilters: PropTypes.func.isRequired,

  toggleFilteredCategories: PropTypes.func.isRequired,
  selectView: PropTypes.func.isRequired,
  logoColors: PropTypes.object.isRequired,
  toggleActiveSource: PropTypes.func.isRequired,
  asyncStatus: PropTypes.object,
};

export default NewsFeed;
