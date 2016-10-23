import { connect } from 'react-redux';
import { fetchWeatherRequested } from './actions';

import Weather from '../Weather.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetWeather, config }) => ({ ...widgetWeather, ...config });

const mergeProps = ({ weatherList, widgetWeather }, { dispatch }) => ({
  weatherList,
  config: widgetWeather,
  onSubmit(searchQuery) {
    dispatch(fetchWeatherRequested(searchQuery));
  },
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Weather));
