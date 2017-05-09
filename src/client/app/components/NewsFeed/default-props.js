export const VIEW_SOURCES = 'sources';
export const VIEW_ARTICLES = 'articles';
export const VIEWS = [VIEW_SOURCES, VIEW_ARTICLES];

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
