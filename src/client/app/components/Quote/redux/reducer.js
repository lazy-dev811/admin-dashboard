import {
  GET_QUOTE_SUCCEEDED,
  GET_QUOTE_FAILED,
} from './actions';

const INITIAL_STATE = {
  quote: 'I am a riddle, or a quote',
  authoe: 'Some great guy',
  failed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_QUOTE_SUCCEEDED: {
      const { quoteText, authorText } = action.quote.data;

      return {
        ...state,
        quote: quoteText,
        author: authorText,
      };
    }
    case GET_QUOTE_FAILED: {
      return {
        ...state,
        failed: true,
      };
    }

    default: {
      return state;
    }
  }
};
