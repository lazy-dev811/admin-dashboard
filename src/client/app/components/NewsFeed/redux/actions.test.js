import { expect } from 'chai';

import {
  SOURCES as sources,
  ACTIVE_SOURCES as activeSources,
} from '../constants';

import {
  SET_FILTERS,
  TOGGLE_ACTIVE_VIEW,
  GET_SOURCES_FAILED,
  GET_ACTIVE_SOURCES_FAILED,
  GET_FILTERED_SOURCES_FAILED,
  GET_FILTERED_CATEGORIES_FAILED,
  GET_SOURCE_LOGOS_FAILED,
  SET_ACTIVE_VIEW,
  SET_SOURCES,
  SET_VISIBLE_SOURCES,
  SET_VISIBLE_ARTICLES,
  GET_SOURCES_AND_FILTERS_REQUESTED,
  GET_ARTICLES_REQUESTED,
  GET_ARTICLES_SUCCEEDED,
  GET_ARTICLES_FAILED,
  ADD_FILTERED_CATEGORY_REQUESTED,
  ADD_FILTERED_CATEGORY_SUCCEEDED,
  ADD_FILTERED_CATEGORY_FAILED,
  REMOVE_FILTERED_CATEGORY_REQUESTED,
  REMOVE_FILTERED_CATEGORY_SUCCEEDED,
  REMOVE_FILTERED_CATEGORY_FAILED,
  ADD_FILTERED_SOURCE_REQUESTED,
  ADD_FILTERED_SOURCE_SUCCEEDED,
  ADD_FILTERED_SOURCE_FAILED,
  REMOVE_FILTERED_SOURCE_REQUESTED,
  REMOVE_FILTERED_SOURCE_SUCCEEDED,
  REMOVE_FILTERED_SOURCE_FAILED,
  ADD_SOURCE_REQUESTED,
  ADD_SOURCE_SUCCEEDED,
  ADD_SOURCE_FAILED,
  REMOVE_SOURCE_REQUESTED,
  REMOVE_SOURCE_SUCCEEDED,
  REMOVE_SOURCE_FAILED,
  setFilters,
  toggleActiveView,
  getSourcesFailed,
  getActiveSourcesFailed,
  getFilteredCategoriesFailed,
  getFilteredSourcesFailed,
  setActiveView,
  setVisibleSources,
  setVisibleArticles,
  setSources,
  getSourceLogosFailed,
  getArticlesRequested,
  getArticlesSucceeded,
  getArticlesFailed,
  getSourcesAndFiltersRequested,
  addFilteredCategoryRequested,
  addFilteredCategorySucceeded,
  addFilteredCategoryFailed,
  removeFilteredCategoryRequested,
  removeFilteredCategorySucceeded,
  removeFilteredCategoryFailed,
  addFilteredSourceRequested,
  addFilteredSourceSucceeded,
  addFilteredSourceFailed,
  removeFilteredSourceRequested,
  removeFilteredSourceSucceeded,
  removeFilteredSourceFailed,
  addSourceRequested,
  addSourceSucceeded,
  addSourceFailed,
  removeSourceRequested,
  removeSourceSucceeded,
  removeSourceFailed,
} from './actions';

describe('actions', () => {
  it('setFilters', () => {
    const params = {
      filters: {},
    };
    const expected = {
      type: SET_FILTERS,
      filters: params.filters,
    };
    expect(setFilters(params.filters)).to.deep.equal(expected);
  });

  it('setActiveView', () => {
    const params = {
      activeSourcesKeys: ['endgadget', 'recode'],
    };
    const expected = {
      type: SET_ACTIVE_VIEW,
      activeSourcesKeys: params.activeSourcesKeys,
    };
    expect(setActiveView(params.activeSourcesKeys)).to.deep.equal(expected);
  });

  it('setVisibleArticles', () => {
    const expected = {
      type: SET_VISIBLE_ARTICLES,
    };
    expect(setVisibleArticles()).to.deep.equal(expected);
  });

  it('setVisibleSources', () => {
    const expected = {
      type: SET_VISIBLE_SOURCES,
    };
    expect(setVisibleSources()).to.deep.equal(expected);
  });

  it('setSources', () => {
    const params = {
      data: sources,
    };
    const expected = {
      type: SET_SOURCES,
      data: params.data,
    };
    expect(setSources(params.data)).to.deep.equal(expected);
  });

  it('toggleActiveView', () => {
    const params = {
      view: 'artiles',
    };
    const expected = {
      type: TOGGLE_ACTIVE_VIEW,
      view: params.view,
    };
    expect(toggleActiveView(params.view)).to.deep.equal(expected);
  });

  it('getSourcesAndFiltersRequested', () => {
    const expected = {
      type: GET_SOURCES_AND_FILTERS_REQUESTED,
    };
    expect(getSourcesAndFiltersRequested()).to.deep.equal(expected);
  });

  it('getSourcesFailed', () => {
    const params = {
      error: 'error',
    };
    const expected = {
      type: GET_SOURCES_FAILED,
      error: params.error,
    };
    expect(getSourcesFailed(params.error)).to.deep.equal(expected);
  });

  it('getActiveSourcesFailed', () => {
    const params = {
      error: 'error',
    };
    const expected = {
      type: GET_ACTIVE_SOURCES_FAILED,
      error: params.error,
    };
    expect(getActiveSourcesFailed(params.error)).to.deep.equal(expected);
  });

  it('getFilteredSourcesFailed', () => {
    const params = {
      error: 'error',
    };
    const expected = {
      type: GET_FILTERED_SOURCES_FAILED,
      error: params.error,
    };
    expect(getFilteredSourcesFailed(params.error)).to.deep.equal(expected);
  });

  it('getSourceLogosFailed', () => {
    const params = {
      error: 'error',
    };
    const expected = {
      type: GET_SOURCE_LOGOS_FAILED,
      error: params.error,
    };
    expect(getSourceLogosFailed(params.error)).to.deep.equal(expected);
  });

  it('getFilteredCategoriesFailed', () => {
    const params = {
      error: 'error',
    };
    const expected = {
      type: GET_FILTERED_CATEGORIES_FAILED,
      error: params.error,
    };
    expect(getFilteredCategoriesFailed(params.error)).to.deep.equal(expected);
  });

  describe('getArticles', () => {
    it('requested', () => {
      const expected = {
        type: GET_ARTICLES_REQUESTED,
      };
      expect(getArticlesRequested()).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        payload: { data: {} },
      };
      const expected = {
        type: GET_ARTICLES_SUCCEEDED,
        payload: params.payload,
      };
      expect(getArticlesSucceeded(params.payload)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: GET_ARTICLES_FAILED,
        error: params.error,
      };
      expect(getArticlesFailed(params.error)).to.deep.equal(expected);
    });
  });

  describe('addFilteredCategory', () => {
    it('requested', () => {
      const params = {
        category: 'technology',
      };
      const expected = {
        type: ADD_FILTERED_CATEGORY_REQUESTED,
        category: params.category,
      };
      expect(addFilteredCategoryRequested(params.category)).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        payload: { data: {} },
      };
      const expected = {
        type: ADD_FILTERED_CATEGORY_SUCCEEDED,
        payload: params.payload,
      };
      expect(addFilteredCategorySucceeded(params.payload)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: ADD_FILTERED_CATEGORY_FAILED,
        error: params.error,
      };
      expect(addFilteredCategoryFailed(params.error)).to.deep.equal(expected);
    });
  });

  describe('removeFilteredCategory', () => {
    it('requested', () => {
      const params = {
        category: 'technology',
      };
      const expected = {
        type: REMOVE_FILTERED_CATEGORY_REQUESTED,
        category: params.category,
      };
      expect(removeFilteredCategoryRequested(params.category)).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        payload: { data: {} },
      };
      const expected = {
        type: REMOVE_FILTERED_CATEGORY_SUCCEEDED,
        payload: params.payload,
      };
      expect(removeFilteredCategorySucceeded(params.payload)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: REMOVE_FILTERED_CATEGORY_FAILED,
        error: params.error,
      };
      expect(removeFilteredCategoryFailed(params.error)).to.deep.equal(expected);
    });
  });

  describe('addFilteredSource', () => {
    it('requested', () => {
      const params = {
        source: sources[0],
      };
      const expected = {
        type: ADD_FILTERED_SOURCE_REQUESTED,
        source: params.source,
      };
      expect(addFilteredSourceRequested(params.source)).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        payload: { data: {} },
      };
      const expected = {
        type: ADD_FILTERED_SOURCE_SUCCEEDED,
        payload: params.payload,
      };
      expect(addFilteredSourceSucceeded(params.payload)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: ADD_FILTERED_SOURCE_FAILED,
        error: params.error,
      };
      expect(addFilteredSourceFailed(params.error)).to.deep.equal(expected);
    });
  });

  describe('removeFilteredSource', () => {
    it('requested', () => {
      const params = {
        source: sources[0],
      };
      const expected = {
        type: REMOVE_FILTERED_SOURCE_REQUESTED,
        source: params.source,
      };
      expect(removeFilteredSourceRequested(params.source)).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        payload: { data: {} },
      };
      const expected = {
        type: REMOVE_FILTERED_SOURCE_SUCCEEDED,
        payload: params.payload,
      };
      expect(removeFilteredSourceSucceeded(params.payload)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: REMOVE_FILTERED_SOURCE_FAILED,
        error: params.error,
      };
      expect(removeFilteredSourceFailed(params.error)).to.deep.equal(expected);
    });
  });

  describe('addSource', () => {
    it('requested', () => {
      const params = {
        source: sources[0],
        activeSources,
      };
      const expected = {
        type: ADD_SOURCE_REQUESTED,
        source: params.source,
        activeSources: params.activeSources,
      };
      expect(addSourceRequested(params.source, activeSources)).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        source: sources[0],
      };
      const expected = {
        type: ADD_SOURCE_SUCCEEDED,
        source: params.source,
      };
      expect(addSourceSucceeded(params.source)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: ADD_SOURCE_FAILED,
        error: params.error,
      };
      expect(addSourceFailed(params.error)).to.deep.equal(expected);
    });
  });

  describe('removeSource', () => {
    it('requested', () => {
      const params = {
        source: sources[0],
        activeSources,
      };
      const expected = {
        type: REMOVE_SOURCE_REQUESTED,
        source: params.source,
        activeSources: params.activeSources,
      };
      expect(removeSourceRequested(params.source, activeSources)).to.deep.equal(expected);
    });
    it('succeeded', () => {
      const params = {
        id: 100,
      };
      const expected = {
        type: REMOVE_SOURCE_SUCCEEDED,
        id: params.id,
      };
      expect(removeSourceSucceeded(params.id)).to.deep.equal(expected);
    });
    it('failed', () => {
      const params = {
        error: 'error',
      };
      const expected = {
        type: REMOVE_SOURCE_FAILED,
        error: params.error,
      };
      expect(removeSourceFailed(params.error)).to.deep.equal(expected);
    });
  });
});
