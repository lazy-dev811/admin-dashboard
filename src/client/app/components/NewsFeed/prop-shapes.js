import { object, array, string, bool, shape } from 'prop-types';

const source = {
  id: string.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  url: string.isRequired,
  category: string.isRequired,
  language: string.isRequired,
  country: string.isRequired,
  urlsToLogos: object.isRequired,
  sortBysAvailable: array.isRequired,
  logo: string.isRequired,
};

const sourceNotRequired = {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
  urlsToLogos: object,
  sortBysAvailable: array,
  logo: string,
};

const activeSource = {
  id: string.isRequired,
  name: string.isRequired,
};

const article = {
  source: string.isRequired,
  title: string.isRequired,
  description: string,
  url: string.isRequired,
  urlToImage: string,
  publishedAt: string,
};

const articleNotRequired = {
  source: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
};

const asyncStatus = {
  inProgress: bool,
  error: bool,
  errorMessage: string,
  getFilteredSources: shape({
    inProgress: bool,
  }),
  getFilteredCategories: shape({
    inProgress: bool,
  }),
  toggleActiveSource: shape({
    inProgress: bool,
  }),
  toggleFilteredCategory: shape({
    inProgress: bool,
  }),
  toggleFilteredSource: shape({
    inProgress: bool,
  }),
};

export const SHAPE_SOURCE = shape(source);
export const SHAPE_ACTIVE_SOURCE = shape(activeSource);
export const SHAPE_VISIBLE_SOURCE = shape(sourceNotRequired);
export const SHAPE_TOGGLED_SOURCE = shape(sourceNotRequired);
export const SHAPE_ARTICLE = shape(article);
export const SHAPE_VISIBLE_ARTICLE = shape(articleNotRequired);
export const SHAPE_ASYNC_STATUS = shape(asyncStatus);
