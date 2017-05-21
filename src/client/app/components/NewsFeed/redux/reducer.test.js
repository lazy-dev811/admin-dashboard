import { expect } from 'chai';
import {
  SOURCES as sources,
  ACTIVE_SOURCES as activeSources,
  ACTIVE_ARTICLES as articles,
} from '../constants';

import {
  setFilters as setFiltersAction,
  getFilteredSourcesFailed as getFilteredSourcesFailedAction,
  getSourcesAndFiltersRequested as getSourcesAndFiltersRequestedAction,
  setActiveView as setActiveViewAction,
  toggleActiveView as toggleActiveViewAction,
  setSources as setSourcesAction,
  getSourcesFailed as getSourcesFailedAction,
  getActiveSourcesFailed as getActiveSourcesFailedAction,
  setVisibleSources as setVisibleSourcesAction,
  setVisibleArticles as setVisibleArticlesAction,
  getArticlesSucceeded as getArticlesSucceededAction,
  getArticlesFailed as getArticlesFailedAction,
  addFilteredCategoryRequested as addFilteredCategoryRequestedAction,
  addFilteredCategorySucceeded as addFilteredCategorySucceededAction,
  addFilteredCategoryFailed as addFilteredCategoryFailedAction,
  removeFilteredCategoryRequested as removeFilteredCategoryRequestedAction,
  removeFilteredCategorySucceeded as removeFilteredCategorySucceededAction,
  removeFilteredCategoryFailed as removeFilteredCategoryFailedAction,
  addFilteredSourceRequested as addFilteredSourceRequestedAction,
  addFilteredSourceSucceeded as addFilteredSourceSucceededAction,
  addFilteredSourceFailed as addFilteredSourceFailedAction,
  removeFilteredSourceRequested as removeFilteredSourceRequestedAction,
  removeFilteredSourceSucceeded as removeFilteredSourceSucceededAction,
  removeFilteredSourceFailed as removeFilteredSourceFailedAction,
  addSourceRequested as addSourceRequestedAction,
  addSourceSucceeded as addSourceSucceededAction,
  addSourceFailed as addSourceFailedAction,
  removeSourceRequested as removeSourceRequestedAction,
  removeSourceSucceeded as removeSourceSucceededAction,
  removeSourceFailed as removeSourceFailedAction,
} from './actions';

import reducer, {
  INITIAL_STATE,
  setFilters,
  getFilteredSourcesFailed, //
  getSourcesAndFiltersRequested, //
  setActiveView,
  toggleActiveView,
  setSources,
  getSourcesFailed,
  getActiveSourcesFailed,
  setVisibleSources, //
  setVisibleArticles, //
  getArticlesSucceeded,
  getArticlesFailed,
  addFilteredCategoryRequested, //
  addFilteredCategorySucceeded,
  addFilteredCategoryFailed,
  removeFilteredCategoryRequested, //
  removeFilteredCategorySucceeded,
  removeFilteredCategoryFailed,
  addFilteredSourceRequested, //
  addFilteredSourceSucceeded,
  addFilteredSourceFailed,
  removeFilteredSourceRequested, //
  removeFilteredSourceSucceeded,
  removeFilteredSourceFailed,
  addSourceRequested,
  addSourceSucceeded,
  addSourceFailed,
  removeSourceRequested,
  removeSourceSucceeded,
  removeSourceFailed,
} from './reducer';

describe('reducer', () => {
  it('setFilters', () => {
    const action = {
      filters: {
        filteredSources: ['recode'],
        filteredCategories: ['technology'],
      },
    };
    expect(reducer(undefined, setFiltersAction(action.filters))).to.deep.equal(setFilters(INITIAL_STATE, action));
  });

  it('getFilteredSourcesFailed', () => {
    expect(reducer(undefined, getFilteredSourcesFailedAction())).to.deep.equal(getFilteredSourcesFailed(INITIAL_STATE));
  });

  it('getSourcesAndFiltersRequested', () => {
    expect(reducer(undefined, getSourcesAndFiltersRequestedAction()))
      .to.deep.equal(getSourcesAndFiltersRequested(INITIAL_STATE));
  });

  it('setActiveView', () => {
    const action = {
      activeSourcesKeys: ['recode'],
    };
    expect(reducer(undefined, setActiveViewAction(action.activeSourcesKeys)))
      .to.deep.equal(setActiveView(INITIAL_STATE, action));
  });

  it('toggleActiveView', () => {
    const action = {
      view: 'articles',
    };
    expect(reducer(undefined, toggleActiveViewAction(action.view)))
      .to.deep.equal(toggleActiveView(INITIAL_STATE, action));
  });

  it('setSources', () => {
    const action = {
      data: {
        sources: {
          data: {
            sources,
          },
        },
        activeSources,
        sourceLogos: [],
      },
    };
    expect(reducer(undefined, setSourcesAction(action.data))).to.deep.equal(setSources(INITIAL_STATE, action));
  });

  it('getSourcesFailed', () => {
    const action = {
      error: {
        message: 'get sources failed',
      },
    };
    expect(reducer(undefined, getSourcesFailedAction(action.error)))
      .to.deep.equal(getSourcesFailed(INITIAL_STATE, action));
  });

  it('getActiveSourcesFailed', () => {
    const action = {
      error: {
        message: 'get active sources failed',
      },
    };
    expect(reducer(undefined, getActiveSourcesFailedAction(action.error)))
      .to.deep.equal(getActiveSourcesFailed(INITIAL_STATE, action));
  });

  it('setVisibleSources', () => {
    const state = {
      ...INITIAL_STATE,
      sources,
      filteredCategories: ['technology', 'politics'],
    };
    expect(reducer(state, setVisibleSourcesAction())).to.deep.equal(setVisibleSources(state));
  });

  it('setVisibleArticles', () => {
    const state = {
      ...INITIAL_STATE,
      filteredSources: ['recode', 'endgadget'],
      activeArticles: articles,
    };
    expect(reducer(state, setVisibleArticlesAction())).to.deep.equal(setVisibleArticles(state));
  });

  it('getArticlesSucceeded', () => {
    const state = {
      ...INITIAL_STATE,
      filteredSources: ['recode', 'endgadget'],
    };
    const action = {
      payload: [
        {
          source: 'recode',
          articles,
        },
      ],
    };
    expect(reducer(state, getArticlesSucceededAction(action.payload)))
      .to.deep.equal(getArticlesSucceeded(state, action));
  });

  it('getArticlesFailed', () => {
    const action = {
      error: {
        message: 'get active articles failed',
      },
    };
    expect(reducer(undefined, getArticlesFailedAction(action.error)))
      .to.deep.equal(getArticlesFailed(INITIAL_STATE, action));
  });

  it('addFilteredCategoryRequested', () => {
    expect(reducer(undefined, addFilteredCategoryRequestedAction()))
      .to.deep.equal(addFilteredCategoryRequested(INITIAL_STATE));
  });

  it('addFilteredCategorySucceeded', () => {
    const action = {
      payload: ['technology'],
    };
    expect(reducer(undefined, addFilteredCategorySucceededAction(action.payload)))
      .to.deep.equal(addFilteredCategorySucceeded(INITIAL_STATE, action));
  });

  it('addFilteredCategoryFailed', () => {
    const action = {
      error: {
        message: 'add filtered category failed',
      },
    };
    expect(reducer(undefined, addFilteredCategoryFailedAction(action.error)))
      .to.deep.equal(addFilteredCategoryFailed(INITIAL_STATE, action));
  });

  it('removeFilteredCategoryRequested', () => {
    expect(reducer(undefined, removeFilteredCategoryRequestedAction()))
      .to.deep.equal(removeFilteredCategoryRequested(INITIAL_STATE));
  });

  it('removeFilteredCategorySucceeded', () => {
    const state = {
      ...INITIAL_STATE,
      filteredCategories: ['technology', 'politics'],
    };
    const action = {
      payload: 'technology',
    };
    expect(reducer(state, removeFilteredCategorySucceededAction(action.payload)))
      .to.deep.equal(removeFilteredCategorySucceeded(state, action));
  });

  it('removeFilteredCategoryFailed', () => {
    const action = {
      error: {
        message: 'remove filtered categories failed',
      },
    };
    expect(reducer(undefined, removeFilteredCategoryFailedAction(action.error)))
      .to.deep.equal(removeFilteredCategoryFailed(INITIAL_STATE, action));
  });

  it('addFilteredSourceRequested', () => {
    expect(reducer(undefined, addFilteredSourceRequestedAction()))
      .to.deep.equal(addFilteredSourceRequested(INITIAL_STATE));
  });

  it('addFilteredSourceSucceeded', () => {
    const state = {
      ...INITIAL_STATE,
      filteredSources: ['recode', 'endgadget'],
    };
    const action = {
      payload: 'hacker-news',
    };
    expect(reducer(state, addFilteredSourceSucceededAction(action.payload)))
      .to.deep.equal(addFilteredSourceSucceeded(state, action));
  });

  it('addFilteredSourceFailed', () => {
    const action = {
      error: {
        message: 'add filtered source failed',
      },
    };
    expect(reducer(undefined, addFilteredSourceFailedAction(action.error)))
      .to.deep.equal(addFilteredSourceFailed(INITIAL_STATE, action));
  });

  it('removeFilteredSourceRequested', () => {
    expect(reducer(undefined, removeFilteredSourceRequestedAction()))
      .to.deep.equal(removeFilteredSourceRequested(INITIAL_STATE));
  });

  it('removeFilteredSourceSucceeded', () => {
    const state = {
      ...INITIAL_STATE,
      filteredSources: ['technology', 'politics'],
    };
    const action = {
      payload: 'technology',
    };
    expect(reducer(state, removeFilteredSourceSucceededAction(action.payload)))
      .to.deep.equal(removeFilteredSourceSucceeded(state, action));
  });

  it('removeFilteredSourceFailed', () => {
    const action = {
      error: {
        message: 'remove filtered source failed',
      },
    };
    expect(reducer(undefined, removeFilteredSourceFailedAction(action.error)))
      .to.deep.equal(removeFilteredSourceFailed(INITIAL_STATE, action));
  });

  it('addSourceRequested', () => {
    const action = {
      source: sources[0],
    };
    expect(reducer(undefined, addSourceRequestedAction(action.source)))
      .to.deep.equal(addSourceRequested(INITIAL_STATE, action));
  });

  it('addSourceSucceeded', () => {
    const state = {
      ...INITIAL_STATE,
      activeSources,
    };
    const action = {
      source: sources[0],
    };
    expect(reducer(state, addSourceSucceededAction(action.source)))
      .to.deep.equal(addSourceSucceeded(state, action));
  });

  it('addSourceFailed', () => {
    const action = {
      error: {
        message: 'add source failed',
      },
    };
    expect(reducer(undefined, addSourceFailedAction(action.error)))
      .to.deep.equal(addSourceFailed(INITIAL_STATE, action));
  });

  it('removeSourceRequested', () => {
    const action = {
      source: sources[0],
    };
    expect(reducer(undefined, removeSourceRequestedAction(action.source)))
      .to.deep.equal(removeSourceRequested(INITIAL_STATE, action));
  });

  it('removeSourceSucceeded', () => {
    const state = {
      ...INITIAL_STATE,
      activeSources,
    };
    const action = {
      id: sources[0].id,
    };
    expect(reducer(state, removeSourceSucceededAction(action.id))).to.deep.equal(removeSourceSucceeded(state, action));
  });

  it('removeSourceFailed', () => {
    const action = {
      error: {
        message: 'remove source failed',
      },
    };
    expect(reducer(undefined, removeSourceFailedAction(action.error)))
      .to.deep.equal(removeSourceFailed(INITIAL_STATE, action));
  });
});
