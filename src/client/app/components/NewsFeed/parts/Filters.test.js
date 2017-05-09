import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Filters, {
  defaultProps,
  FiltersWrap,
  Filter,
} from './Filters.jsx';

chai.use(chaiEnzyme());


const wrapper = newProps => shallow(<Filters {...defaultProps} {...newProps} />);
describe('<Filters />', () => {
  const sourceView = { activeView: 'sources' };

  it('<FiltersWrap />', () => {
    expect(wrapper().find(FiltersWrap)).to.exist;
  });

  describe('<Filter /> display activeView filter. default to articles', () => {
    it('renders title prop', () => {
      expect(wrapper().find(Filter)).to.have.prop('title', 'filter by active sources');
      expect(wrapper(sourceView).find(Filter)).to.have.prop('title', 'filter by categories');
    });
    it('renders options prop', () => {
      const activeSources = [{ id: 'recode' }];
      const categories = ['technology'];
      expect(wrapper({ activeSources }).find(Filter)).to.have.prop('options').deep.equal(activeSources.map(a => a.id));
      expect(wrapper({ ...sourceView, categories }).find(Filter)).to.have.prop('options', categories);
    });
    it('renders compareOptions prop', () => {
      const filteredSources = ['recode'];
      const filteredCategories = ['technology'];
      expect(wrapper({ filteredSources }).find(Filter)).to.have.prop('compareOptions').deep.equal(filteredSources);
      expect(wrapper({ ...sourceView, filteredCategories }).find(Filter)).to.have.prop(
        'compareOptions', filteredCategories
      );
    });
    it('renders onChange prop method', () => {
      expect(wrapper().find(Filter)).to.have.prop('onChange', defaultProps.toggleFilteredSources);
      expect(wrapper(sourceView).find(Filter)).to.have.prop('onChange', defaultProps.toggleFilteredCategories);
    });
  });
});
