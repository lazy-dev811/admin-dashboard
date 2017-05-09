import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import moment from 'moment';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { DATE_FORMAT_DAY_MONTH, DATE_FORMAT_TIME } from '../../../constants';

import Articles, {
  defaultProps,
  ArticlesList,
  Article,
  ImgWrap,
  Img,
  Source,
  DateDayOfMonth,
  Time,
  Title,
  Description,
} from './Articles.jsx';

import Pills from '../../Pills';

chai.use(chaiEnzyme());
chai.use(sinonChai);


const activeArticles = [
  {
    source: 'hacker-news',
    author: 'https://www.facebook.com/jlachenbach',
    title: 'U.S. life expectancy',
    description: 'The District of Columbia',
    url: 'https://www.url',
    urlToImage: 'https://urlToImage',
    publishedAt: '2017-05-08T17:30:00Z',
  },
];

const visibleArticles = [
  {
    source: 'visible article source',
    title: 'visible article title',
    description: 'visible article description',
    url: 'https://google.com/visible',
    urlToImage: 'https://google.com/images/visible',
    publishedAt: '2020-01-01',
  },
];

const wrapper = additionalProps => shallow(<Articles {...defaultProps} {...additionalProps} />);

describe('<ARTICLES>', () => {
  describe('<Pills>', () => {
    const filteredSources = ['recode'];

    it('renders', () => {
      expect(wrapper().find(Pills)).to.not.exist;
      expect(wrapper({ filteredSources }).find(Pills)).to.exist;
    });
    it('renders label prop', () => {
      expect(wrapper({ filteredSources }).find(Pills)).to.have.prop('label', 'active sources');
    });
    it('renders list prop', () => {
      expect(wrapper({ filteredSources }).find(Pills)).to.have.prop('list', filteredSources);
    });
    it('renders onClick prop', () => {
      const sandbox = sinon.sandbox.create();
      const spyClick = sandbox.spy(defaultProps, 'toggleFilteredSources');
      wrapper({ filteredSources }).find(Pills).simulate('click');
      expect(spyClick).to.have.been.calledOnce;
      sandbox.restore();
    });
    it('renders asyncStatus prop', () => {
      expect(wrapper({ filteredSources }).find(Pills)).to.have.prop(
        'asyncStatus', defaultProps.asyncStatus.toggleFilteredSource
      );
    });
  });

  it('<ArticlesList>', () => {
    expect(wrapper().find(ArticlesList)).to.exist;
  });

  describe('<Article>', () => {
    it('displays activeArticles if !visibleArticles', () => {
      expect(wrapper().find(Article)).to.not.exist;
      expect(wrapper({ activeArticles }).find(Article)).to.exist;
    });

    it('displays visibleArticles if exist', () => {
      expect(wrapper({ visibleArticles }).find(Title)).to.have.props({
        href: visibleArticles[0].url, children: visibleArticles[0].title,
      });
    });
  });

  it('<ImgWrap>', () => {
    expect(wrapper({ activeArticles }).find(ImgWrap)).to.exist;
  });

  it('<Img>', () => {
    expect(wrapper({ activeArticles }).find(Img)).to.have.prop('src', activeArticles[0].urlToImage);
  });

  describe('<Source>', () => {
    it('renders logoColors prop', () => {
      expect(wrapper({ activeArticles }).find(Source)).to.have.prop('logoColors', defaultProps.logoColors);
    });
    it('renders article prop', () => {
      expect(wrapper({ activeArticles }).find(Source)).to.have.prop('article', activeArticles[0]);
    });
    it('renders children prop', () => {
      expect(wrapper({ activeArticles }).find(Source)).to.have.prop('children', activeArticles[0].source);
    });
  });

  describe('<DateDayOfMonth>', () => {
    it('renders children prop', () => {
      const dateString = moment(activeArticles[0].publishedAt).format(DATE_FORMAT_DAY_MONTH);
      expect(wrapper({ activeArticles }).find(DateDayOfMonth)).to.have.prop('children', dateString);
    });
  });

  describe('<Time>', () => {
    it('renders children prop', () => {
      const timeString = moment(activeArticles[0].publishedAt).format(DATE_FORMAT_TIME);
      expect(wrapper({ activeArticles }).find(Time)).to.have.prop('children', timeString);
    });
  });

  describe('<Title>', () => {
    it('renders href prop', () => {
      expect(wrapper({ activeArticles }).find(Title)).to.have.prop('href', activeArticles[0].url);
    });
    it('renders children prop', () => {
      expect(wrapper({ activeArticles }).find(Title)).to.have.prop('children', activeArticles[0].title);
    });
  });

  describe('<Description />', () => {
    it('renders children prop', () => {
      expect(wrapper({ activeArticles }).find(Description)).to.have.prop('children', activeArticles[0].description);
    });
  });
});
