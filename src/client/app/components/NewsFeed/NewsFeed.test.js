import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import {
  VIEW_SOURCES,
  VIEW_ARTICLES,
  VIEWS as views,
  SOURCES as sources,
  VISIBLE_SOURCES as visibleSources,
  ACTIVE_SOURCES as activeSources,
  VISIBLE_ARTICLES as visibleArticles,
  ACTIVE_ARTICLES as activeArticles,
  ASYNC_STATUS as asyncStatus,
} from './constants';

import NewsFeed, {
  defaultProps,
  NewsFeedWrap,
  Options,
} from './NewsFeed.jsx';
import Filters from './parts/Filters.jsx';
import Views from './parts/Views.jsx';
import Sources from './parts/Sources.jsx';
import Articles from './parts/Articles.jsx';

chai.use(chaiEnzyme());


const props = {
  sources,
  activeSources,
  filteredSources: ['endgadget'],
  visibleSources,
  toggledSource: { source: 'time' },
  getSourcesAndFilters() {},
  toggleActiveSource() {},
  toggleFilteredSources() {},

  activeArticles,
  visibleArticles,

  categories: ['technology'],
  filteredCategories: ['enterntainment'],
  toggleFilteredCategories() {},

  views,
  activeView: VIEW_ARTICLES,
  selectView() {},

  logoColors: {},
  asyncStatus,
};

const wrapper = additionalProps => shallow(<NewsFeed {...defaultProps} {...additionalProps} />);
describe('<NEWSFEED>', () => {
  it('<NewsFeedWrap>', () => {
    expect(wrapper().find(NewsFeedWrap)).to.exist;
  });

  it('<Options>', () => {
    expect(wrapper().find(Options)).to.exist;
  });

  describe('<Filters>', () => {
    it('accepts categories prop', () => {
      const newProps = { categories: props.categories };
      expect(wrapper().find(Filters)).to.have.prop('categories', defaultProps.categories);
      expect(wrapper(newProps).find(Filters)).to.have.prop('categories', props.categories);
    });
    it('accepts filteredCategories prop', () => {
      const newProps = { filteredCategories: props.filteredCategories };
      expect(wrapper().find(Filters)).to.have.prop('filteredCategories', defaultProps.filteredCategories);
      expect(wrapper(newProps).find(Filters)).to.have.prop('filteredCategories', props.filteredCategories);
    });
    it('accepts toggleFilteredCategories prop method', () => {
      const newProps = { toggleFilteredCategories: props.toggleFilteredCategories };
      expect(wrapper().find(Filters)).to.have.prop('toggleFilteredCategories', defaultProps.toggleFilteredCategories);
      expect(wrapper(newProps).find(Filters)).to.have.prop('toggleFilteredCategories', props.toggleFilteredCategories);
    });
    it('accepts activeSources prop', () => {
      const newProps = { activeSources: props.activeSources };
      expect(wrapper().find(Filters)).to.have.prop('activeSources', defaultProps.activeSources);
      expect(wrapper(newProps).find(Filters)).to.have.prop('activeSources', props.activeSources);
    });
    it('accepts filteredSources prop', () => {
      const newProps = { filteredSources: props.filteredSources };
      expect(wrapper().find(Filters)).to.have.prop('filteredSources', defaultProps.filteredSources);
      expect(wrapper(newProps).find(Filters)).to.have.prop('filteredSources', props.filteredSources);
    });
    it('accepts toggleFilteredSources prop method', () => {
      const newProps = { toggleFilteredSources: props.toggleFilteredSources };
      expect(wrapper().find(Filters)).to.have.prop('toggleFilteredSources', defaultProps.toggleFilteredSources);
      expect(wrapper(newProps).find(Filters)).to.have.prop('toggleFilteredSources', props.toggleFilteredSources);
    });
    it('accepts activeView prop', () => {
      const newProps = { activeView: props.activeView };
      expect(wrapper().find(Filters)).to.not.have.prop('activeView');
      expect(wrapper(newProps).find(Filters)).to.have.prop('activeView', props.activeView);
    });
  });

  describe('<Views>', () => {
    it('accepts views prop', () => {
      const newProps = { views: props.views };
      expect(wrapper().find(Views)).to.have.prop('views', defaultProps.views);
      expect(wrapper(newProps).find(Views)).to.have.prop('views', props.views);
    });
    it('accepts activeSources prop', () => {
      const newProps = { activeSources: props.activeSources };
      expect(wrapper().find(Views)).to.have.prop('activeSources', defaultProps.activeSources);
      expect(wrapper(newProps).find(Views)).to.have.prop('activeSources', props.activeSources);
    });
    it('accepts activeView prop', () => {
      const newProps = { activeView: props.activeView };
      expect(wrapper().find(Filters)).to.not.have.prop('activeView');
      expect(wrapper(newProps).find(Filters)).to.have.prop('activeView', props.activeView);
    });
    it('accepts selectView prop', () => {
      const newProps = { selectView: props.selectView };
      expect(wrapper().find(Views)).to.have.prop('selectView', defaultProps.selectView);
      expect(wrapper(newProps).find(Views)).to.have.prop('selectView', props.selectView);
    });
  });

  describe('<Sources>', () => {
    const sourcesView = { activeView: VIEW_SOURCES };

    it('accepts sources prop', () => {
      const newProps = { ...sourcesView, sources: props.sources };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('sources', defaultProps.sources);
      expect(wrapper(newProps).find(Sources)).to.have.prop('sources', props.sources);
    });
    it('accepts activeSources prop', () => {
      const newProps = { ...sourcesView, activeSources: props.activeSources };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('activeSources', defaultProps.activeSources);
      expect(wrapper(newProps).find(Sources)).to.have.prop('activeSources', props.activeSources);
    });
    it('accepts visibleSources prop', () => {
      const newProps = { ...sourcesView, visibleSources: props.visibleSources };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('visibleSources', defaultProps.visibleSources);
      expect(wrapper(newProps).find(Sources)).to.have.prop('visibleSources', props.visibleSources);
    });
    it('accepts filteredCategories prop', () => {
      const newProps = { ...sourcesView, filteredCategories: props.filteredCategories };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('filteredCategories', defaultProps.filteredCategories);
      expect(wrapper(newProps).find(Sources)).to.have.prop('filteredCategories', props.filteredCategories);
    });
    it('accepts toggleFilteredCategories prop', () => {
      const newProps = { ...sourcesView, toggleFilteredCategories: props.toggleFilteredCategories };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('toggleFilteredCategories', defaultProps.toggleFilteredCategories);
      expect(wrapper(newProps).find(Sources)).to.have.prop('toggleFilteredCategories', props.toggleFilteredCategories);
    });
    it('accepts toggledSource prop', () => {
      const newProps = { ...sourcesView, toggledSource: props.toggledSource };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('toggledSource', defaultProps.toggledSource);
      expect(wrapper(newProps).find(Sources)).to.have.prop('toggledSource', props.toggledSource);
    });
    it('accepts toggleActiveSource prop', () => {
      const newProps = { ...sourcesView, toggleActiveSource: props.toggleActiveSource };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('toggleActiveSource', defaultProps.toggleActiveSource);
      expect(wrapper(newProps).find(Sources)).to.have.prop('toggleActiveSource', props.toggleActiveSource);
    });
    it('accepts asyncStatus prop', () => {
      const newProps = { ...sourcesView, asyncStatus: props.asyncStatus };
      expect(wrapper(sourcesView).find(Sources)).to.have.prop('asyncStatus', defaultProps.asyncStatus);
      expect(wrapper(newProps).find(Sources)).to.have.prop('asyncStatus', props.asyncStatus);
    });
  });

  describe('<Articles>', () => {
    const articlesView = { activeView: VIEW_ARTICLES };

    it('accepts activeArticles prop', () => {
      const newProps = { ...articlesView, activeArticles: props.activeArticles };
      expect(wrapper(articlesView).find(Articles)).to.have.prop('activeArticles', defaultProps.activeArticles);
      expect(wrapper(newProps).find(Articles)).to.have.prop('activeArticles', props.activeArticles);
    });
    it('accepts visibleArticles prop', () => {
      const newProps = { ...articlesView, visibleArticles: props.visibleArticles };
      expect(wrapper(articlesView).find(Articles)).to.have.prop('visibleArticles', defaultProps.visibleArticles);
      expect(wrapper(newProps).find(Articles)).to.have.prop('visibleArticles', props.visibleArticles);
    });
    it('accepts filteredSources prop', () => {
      const newProps = { ...articlesView, filteredSources: props.filteredSources };
      expect(wrapper(articlesView).find(Articles)).to.have.prop('filteredSources', defaultProps.filteredSources);
      expect(wrapper(newProps).find(Articles)).to.have.prop('filteredSources', props.filteredSources);
    });
    it('accepts toggleFilteredSources prop', () => {
      const newProps = { ...articlesView, toggleFilteredSources: props.toggleFilteredSources };
      expect(wrapper(articlesView).find(Articles)).to.have.prop('toggleFilteredSources', defaultProps.toggleFilteredSources);
      expect(wrapper(newProps).find(Articles)).to.have.prop('toggleFilteredSources', props.toggleFilteredSources);
    });
    it('accepts logoColors prop', () => {
      const newProps = { ...articlesView, logoColors: props.logoColors };
      expect(wrapper(articlesView).find(Articles)).to.have.prop('logoColors', defaultProps.logoColors);
      expect(wrapper(newProps).find(Articles)).to.have.prop('logoColors', props.logoColors);
    });
    it('accepts asyncStatus prop', () => {
      const newProps = { ...articlesView, asyncStatus: props.asyncStatus };
      expect(wrapper(articlesView).find(Articles)).to.have.prop('asyncStatus', defaultProps.asyncStatus);
      expect(wrapper(newProps).find(Articles)).to.have.prop('asyncStatus', props.asyncStatus);
    });
  });
});
