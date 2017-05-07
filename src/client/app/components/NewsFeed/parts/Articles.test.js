import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import moment from 'moment';

import { DATE_FORMAT_DAY_MONTH, DATE_FORMAT_TIME } from '../../../constants';

import Articles, {
  ArticlesList,
  Article,
  ImgWrap,
  Img,
  Source,
  Date,
  Time,
  Title,
  Description,
} from './Articles.jsx';

import Pills from '../../Pills';

chai.use(chaiEnzyme());


const defaultProps = {
  activeArticles: [],
  visibleArticles: [],
  filteredSources: [],
  toggleFilteredSources() {},
  logoColors: {},
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,

    getFilteredSources: {
      inProgress: false,
    },

    getFilteredCategories: {
      inProgress: false,
    },

    toggleActiveSource: {
      inProgress: false,
    },

    toggleFilteredCategory: {
      inProgress: false,
    },
  },
};

const propsArticle = {
  source: 'article source',
  title: 'article title',
  description: 'article description',
  url: 'https://google.com',
  urlToImage: 'https://google.com/images',
  publishedAt: '2017-01-01',
};

const propsArticles = {
  activeArticles: Array(1).fill(propsArticle),
};

const propsVisibleArticle = {
  source: 'visible article source',
  title: 'visible article title',
  description: 'visible article description',
  url: 'https://google.com/visible',
  urlToImage: 'https://google.com/images/visible',
  publishedAt: '2020-01-01',
};

const propsVisibleArticles = {
  activeArticles: Array(1).fill(propsVisibleArticle),
};

const wrapper = additionalProps => shallow(<Articles {...defaultProps} {...additionalProps} />);

describe('<Articles />', () => {
  it('<ArticlesList />', () => {
    expect(wrapper()).to.have.descendants(ArticlesList);
  });

  it('<Article /> displays activeArticles if !visibleArticles', () => {
    expect(wrapper().find(Article)).to.not.exist;
    expect(wrapper(propsArticles).find(Article)).to.exist;
  });

  it('<Article /> displays visibleArticles if exist', () => {
    expect(wrapper(propsVisibleArticles).find(Title)).to.have.props({
      href: propsVisibleArticle.url, children: propsVisibleArticle.title,
    });
  });

  it('<ImgWrap />', () => {
    expect(wrapper(propsArticles).find(ImgWrap)).to.exist;
  });

  it('<Img />', () => {
    expect(wrapper(propsArticles).find(Img)).to.have.prop('src', propsArticle.urlToImage);
  });

  it('<Source />', () => {
    expect(wrapper(propsArticles).find(Source)).to.have.props({
      logoColors: defaultProps.logoColors, article: propsArticle, children: propsArticle.source,
    });
  });

  it('<Date />', () => {
    const dateFormatted = moment(propsArticle.publishedAt).format(DATE_FORMAT_DAY_MONTH);
    const timeFormatted = moment(propsArticle.publishedAt).format(DATE_FORMAT_TIME);
    expect(wrapper(propsArticles).find(Date)).to.have.prop('children').to.deep.equal(
      [dateFormatted, <Time>{timeFormatted}</Time>]
    );
  });

  it('<Time />', () => {
    const timeFormatted = moment(propsArticle.publishedAt).format(DATE_FORMAT_TIME);
    expect(wrapper(propsArticles).find(Time)).to.have.prop('children', timeFormatted);
  });

  it('<Title />', () => {
    expect(wrapper(propsArticles).find(Title)).to.have.props({ href: propsArticle.url, children: propsArticle.title });
  });

  it('<Description />', () => {
    expect(wrapper(propsArticles).find(Description)).to.have.prop('children', propsArticle.description);
  });

  it('<Pills /> displays filteredSources if exist', () => {
    const newProps = {
      filteredSources: ['recode'],
    };
    expect(wrapper().find(Pills)).to.not.exist;
    expect(wrapper(newProps).find(Pills)).to.have.props({
      label: 'active sources',
      list: newProps.filteredSources,
      // onClick: () => {},
      asyncStatus: defaultProps.asyncStatus.toggleFilteredSource,
    });
  });
});
