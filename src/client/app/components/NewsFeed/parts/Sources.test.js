import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Sources, {
  defaultProps,
  SourcesList,
  Source,
  Img,
  Name,
  Button,
} from './Sources.jsx';
import Pills from '../../Pills';

chai.use(chaiEnzyme());
chai.use(sinonChai);


const sources = [
  {
    id: 'recode',
    name: 'Recode',
    description: 'source description',
    url: 'http://www.recode.net',
    category: 'technology',
    language: 'en',
    country: 'us',
    urlsToLogos: { small: '', medium: '', large: '' },
    sortBysAvailable: ['top'],
    logo: 'source logo',
  },
];

const activeSources = [
  {
    id: 'engadget',
    name: 'Engadget',
    description: 'source description.',
    url: 'https://www.engadget.com',
    category: 'technology',
    language: 'en',
    country: 'us',
    urlsToLogos: { small: '', medium: '', large: '' },
    sortBysAvailable: ['top', 'latest'],
    logo: 'logoUrl',
  },
];

const wrapper = additionalProps => shallow(<Sources {...defaultProps} {...additionalProps} />);

describe('<Sources />', () => {
  describe('<Pills />', () => {
    const filteredCategories = ['technology'];

    it('renders', () => {
      expect(wrapper().find(Pills)).to.not.exist;
      expect(wrapper({ filteredCategories }).find(Pills)).to.exist;
    });
    it('renders label prop', () => {
      expect(wrapper({ filteredCategories }).find(Pills)).to.have.prop('label', 'active categories');
    });
    it('renders list prop', () => {
      expect(wrapper({ filteredCategories }).find(Pills)).to.have.prop('list', filteredCategories);
    });
    it('renders onClick prop', () => {
      const sandbox = sinon.sandbox.create();
      const spyClick = sandbox.spy(defaultProps, 'toggleFilteredCategories');
      wrapper({ filteredCategories }).find(Pills).simulate('click');
      expect(spyClick).to.have.been.calledOnce;
      sandbox.restore();
    });
    it('renders asyncStatus prop', () => {
      expect(wrapper({ filteredCategories }).find(Pills)).to.have.prop(
        'asyncStatus', defaultProps.asyncStatus.toggleFilteredCategory
      );
    });
  });

  it('<SourceList />', () => {
    expect(wrapper().find(SourcesList)).to.exist;
  });

  describe('<Source />', () => {
    it('renders activeSources prop', () => {
      expect(wrapper({ sources }).find(Source)).to.prop('activeSources').to.deep.equal([]);
      expect(wrapper({ sources, activeSources }).find(Source)).to.prop('activeSources', activeSources);
    });
    it('renders source prop', () => {
      expect(wrapper({ sources }).find(Source)).to.prop('source', sources[0]);
    });
  });

  describe('<Button />', () => {
    it('renders onClick prop method', () => {
      const sandbox = sinon.sandbox.create();
      const spyClick = sandbox.spy(defaultProps, 'toggleActiveSource');
      wrapper({ sources }).find(Button).simulate('click');
      expect(spyClick).to.have.been.calledOnce;
      sandbox.restore();
    });
  });

  describe('<Img />', () => {
    it('renders', () => {
      expect(wrapper().find(Img)).to.not.exist;
      expect(wrapper({ sources }).find(Img)).to.exist;
    });
    it('renders source prop', () => {
      expect(wrapper({ sources }).find(Img)).to.prop('src', sources[0].logo);
    });
  });

  describe('<Name />', () => {
    it('renders', () => {
      expect(wrapper().find(Name)).to.not.exist;
      expect(wrapper({ sources }).find(Name)).to.exist;
    });
    it('renders href prop', () => {
      expect(wrapper({ sources }).find(Name)).to.prop('href', sources[0].url);
    });
    it('renders target prop', () => {
      expect(wrapper({ sources }).find(Name)).to.prop('target', '_blank');
    });
    it('renders children prop', () => {
      expect(wrapper({ sources }).find(Name)).to.prop('children', sources[0].name);
    });
  });
});
