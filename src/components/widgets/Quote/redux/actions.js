export const GET_QUOTE_REQUESTED = 'GET_QUOTE_REQUESTED';
export const GET_QUOTE_SUCCEEDED = 'GET_QUOTE_SUCCEEDED';
export const GET_QUOTE_FAILED = 'GET_QUOTE_FAILED';

export const getQuoteRequested = () => ({
  type: GET_QUOTE_REQUESTED,
});

export const getQuoteSucceeded = quote => ({
  type: GET_QUOTE_SUCCEEDED,
  quote,
});

export const getQuoteFailed = error => ({
  type: GET_QUOTE_FAILED,
  error,
});
