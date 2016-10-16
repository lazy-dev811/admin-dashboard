import { connect } from 'react-redux';
import Greet from '../Greet.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetGreet }) => ({
  ...widgetGreet,
});

const mergeProps = ({ data, config }) => ({
  data,
  config,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Greet));
