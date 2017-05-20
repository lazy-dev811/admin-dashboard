export const VIEW_SOURCES = 'sources';
export const VIEW_ARTICLES = 'articles';
export const VIEWS = [VIEW_SOURCES, VIEW_ARTICLES];

export const SOURCES = [
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

export const ACTIVE_SOURCES = [
  {
    id: 'engadget',
    name: 'Engadget',
    description: 'source description',
    url: 'https://www.engadget.com',
    category: 'technology',
    language: 'en',
    country: 'us',
    urlsToLogos: { small: '', medium: '', large: '' },
    sortBysAvailable: ['top', 'latest'],
    logo: 'active source logo',
  },
];

export const VISIBLE_SOURCES = [
  {
    id: 'techradar',
    name: 'TechRadar',
    description: 'visible source description',
    url: 'http://www.techradar.com',
    category: 'technology',
    language: 'en',
    country: 'us',
    urlsToLogos: { small: '', medium: '', large: '' },
    sortBysAvailable: ['top', 'latest'],
    logo: 'visible source logo',
  },
];

export const ACTIVE_ARTICLES = [
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

export const VISIBLE_ARTICLES = [
  {
    source: 'visible article source',
    title: 'visible article title',
    description: 'visible article description',
    url: 'https://google.com/visible',
    urlToImage: 'https://google.com/images/visible',
    publishedAt: '2020-01-01',
  },
];

export const ASYNC_STATUS = {
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
  toggleFilteredSource: {
    inProgress: false,
  },
};
