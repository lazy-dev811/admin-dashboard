import React, { Component } from 'react';
import { object, string, func, arrayOf } from 'prop-types';
import styled from 'styled-components';

import {
  SHAPE_SOURCE,
  SHAPE_ACTIVE_SOURCE,
  SHAPE_VISIBLE_SOURCE,
  SHAPE_TOGGLED_SOURCE,
  SHAPE_ARTICLE,
  SHAPE_VISIBLE_ARTICLE,
  SHAPE_ASYNC_STATUS,
} from './prop-shapes';
import { VIEW_SOURCES, VIEW_ARTICLES, VIEWS, ASYNC_STATUS } from './constants';

import Filters from './parts/Filters.jsx';
import Views from './parts/Views.jsx';
import Sources from './parts/Sources.jsx';
import Articles from './parts/Articles.jsx';

import { COLOR_WHITE } from '../../styles';


export const NewsFeedWrap = styled.div`
  background-color: ${COLOR_WHITE};
`;

export const Options = styled.div`
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

      activeArticles,
      visibleArticles,

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
          activeView === VIEW_SOURCES &&
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
          activeView === VIEW_ARTICLES &&
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

NewsFeed.propTypes = {
  sources: arrayOf(SHAPE_SOURCE).isRequired,
  activeSources: arrayOf(SHAPE_ACTIVE_SOURCE).isRequired,
  filteredSources: arrayOf(string).isRequired,
  visibleSources: arrayOf(SHAPE_VISIBLE_SOURCE).isRequired,
  toggledSource: SHAPE_TOGGLED_SOURCE.isRequired,
  toggleFilteredSources: func.isRequired,

  activeArticles: arrayOf(SHAPE_ARTICLE).isRequired,
  visibleArticles: arrayOf(SHAPE_VISIBLE_ARTICLE).isRequired,

  views: arrayOf(string).isRequired,
  activeView: string,
  categories: arrayOf(string).isRequired,
  filteredCategories: arrayOf(string),
  getSourcesAndFilters: func.isRequired,

  toggleFilteredCategories: func.isRequired,
  selectView: func.isRequired,
  logoColors: object.isRequired,
  toggleActiveSource: func.isRequired,
  asyncStatus: SHAPE_ASYNC_STATUS,
};

NewsFeed.defaultProps = {
  sources: [],
  activeSources: [],
  filteredSources: [],
  visibleSources: [],
  toggledSource: {},
  getSourcesAndFilters() {},
  toggleActiveSource() {},
  toggleFilteredSources() {},

  activeArticles: [],
  visibleArticles: [],

  categories: [],
  filteredCategories: [],
  toggleFilteredCategories() {},

  views: VIEWS,
  activeView: undefined,
  selectView() {},

  logoColors: {},
  asyncStatus: ASYNC_STATUS,
};

export default NewsFeed;
export const { defaultProps } = NewsFeed;
