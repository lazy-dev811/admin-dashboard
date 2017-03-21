import { connect } from 'react-redux';

import { getQuoteRequested } from './actions';
import Quote from '../Quote.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetQuote, config }) => ({ ...widgetQuote, ...config });

const mergeProps = ({ widgetIdentifier, quote, author, asyncStatus, widgetQuote }, { dispatch }) => ({
  widgetIdentifier,
  quote,
  author,
  asyncStatus,
  config: widgetQuote,
  getQuote(quoteData) {
    dispatch(getQuoteRequested(quoteData));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Quote));
