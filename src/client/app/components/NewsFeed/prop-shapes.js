import PropTypes from 'prop-types';

const source = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  urlsToLogos: PropTypes.object.isRequired,
  sortBysAvailable: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
};

const sourceNotRequired = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  category: PropTypes.string,
  language: PropTypes.string,
  country: PropTypes.string,
  urlsToLogos: PropTypes.object,
  sortBysAvailable: PropTypes.array,
  logo: PropTypes.string,
};

const activeSource = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const article = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
};


export const SHAPE_SOURCE = PropTypes.shape(source);
export const SHAPE_ACTIVE_SOURCE = PropTypes.shape(activeSource);
export const SHAPE_VISIBLE_SOURCE = PropTypes.shape(activeSource);
export const SHAPE_TOGGLED_SOURCE = PropTypes.shape(sourceNotRequired);
export const SHAPE_ARTICLE = PropTypes.shape(article);
export const SHAPE_VISIBLE_ARTICLE = PropTypes.shape(article);
