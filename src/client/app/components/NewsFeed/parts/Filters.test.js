import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Filters, {
  FiltersWrap,
  Filter,
} from './Filters.jsx';

chai.use(chaiEnzyme());


const props = {
  categories: [],
  filteredCategories: [],
  toggleFilteredCategories() {},
  activeSources: [],
  filteredSources: [],
  toggleFilteredSources() {},
  activeView: undefined,
};

const wrapper = newProps => shallow(<Filters {...props} {...newProps} />);


describe('<Filters />', () => {
  it('<FiltersWrap />', () => {
    expect(wrapper().find(FiltersWrap)).to.exist;
  });

  it('<Filter /> displays sources filter if viewing sources', () => {
    const newProps = {
      activeView: 'sources',
    };
    expect(wrapper(newProps).find(Filter)).to.have.props({
      title: 'filter by categories',
      options: props.categories,
      compareOptions: props.filteredCategories,
      onChange: props.toggleFilteredCategories,
    });
  });

  it('<Filter /> displays articles filter if viewing articles', () => {
    const newProps = {
      activeView: 'articles',
      activeSources: [
        {
          id: 'recode',
          name: 'recode',
        },
      ],
    };
    expect(wrapper(newProps).find(Filter)).to
      .have.props(['title', 'options', 'compareOptions', 'onChange'])
      .deep.equal(['filter by active sources', ['recode'], props.filteredSources, props.toggleFilteredSources]);
  });
});
