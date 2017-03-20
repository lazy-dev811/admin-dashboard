import { connect } from 'react-redux';
import Greet from '../Greet.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetGreet, config }) => ({ ...widgetGreet, ...config });

const mergeProps = ({ widgetName, person, date, widgetGreet }) => ({
  widgetName,
  person,
  date,
  config: widgetGreet,
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Greet));
