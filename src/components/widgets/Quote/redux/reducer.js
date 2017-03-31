import {
  GET_QUOTE_REQUESTED,
  GET_QUOTE_SUCCEEDED,
  GET_QUOTE_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetGreet',
  widgetName: 'Greet',
  quote: '',
  author: '',
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
        },
      };
    }
    case GET_QUOTE_SUCCEEDED: {
      const { quoteText, quoteAuthor } = action.quote.data;

      return {
        ...state,
        quote: quoteText,
        author: quoteAuthor,
        asyncStatus: {
          inProgress: false,
          error: false,
        },
      };
    }
    case GET_QUOTE_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }

    default: {
      return state;
    }
  }
};
