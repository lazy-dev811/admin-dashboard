import { connect } from 'react-redux';

import Quote from '../Quote.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetQuote, config }) => ({ ...widgetQuote, ...config });

const mergeProps = ({ quote, widgetQuote }) => ({
  quote,
  config: widgetQuote,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Quote));
