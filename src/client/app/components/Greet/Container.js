import { connect } from 'react-redux';
import Greet from './Greet.jsx';
import greetHOC from './HOC.jsx';

const mapStateToProps = ({ greet }) => ({
  ...greet,
  test: 'Bollaert',
});

const mergeProps = stateProps => ({
  person: stateProps.person,
});

export default connect(mapStateToProps, null, mergeProps)(greetHOC(Greet));
