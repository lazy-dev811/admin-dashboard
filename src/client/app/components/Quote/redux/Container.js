import { connect } from 'react-redux';

import { getQuoteRequested } from './actions';
import Quote from '../Quote.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetQuote, config }) => ({ ...widgetQuote, ...config });

const mergeProps = ({ quote, author, widgetQuote }, { dispatch }) => ({
  quote,
  author,
  config: widgetQuote,
  getQuote(quoteData) {
    dispatch(getQuoteRequested(quoteData));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Quote));
