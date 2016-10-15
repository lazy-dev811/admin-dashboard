import { connect } from 'react-redux';
import { fetchWeatherRequested } from './actions';

import Weather from '../Weather.jsx';
import weatherHOC from '../HOC.jsx';

const mapStateToProps = ({ weather }) => ({
  weather,
});

const mergeProps = (stateProps, { dispatch }) => ({
  ...stateProps,
  onSubmit(searchQuery) {
    console.log('clicked');
    dispatch(fetchWeatherRequested(searchQuery));
  },
});

export default connect(mapStateToProps, null, mergeProps)(weatherHOC(Weather));
