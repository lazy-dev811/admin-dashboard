import { connect } from 'react-redux';
import { fetchWeatherRequested } from './actions';

import Weather from '../Weather.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ weather }) => ({
  weather,
});

const mergeProps = (stateProps, { dispatch }) => ({
  ...stateProps,
  onSubmit(searchQuery) {
    dispatch(fetchWeatherRequested(searchQuery));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Weather));
