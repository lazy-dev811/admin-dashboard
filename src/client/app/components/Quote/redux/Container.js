import { connect } from 'react-redux';

import Quote from '../Quote.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetQuote }) => ({
  ...widgetQuote,
});

const mergeProps = ({ data, config }) => ({
  data,
  config,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Quote));
