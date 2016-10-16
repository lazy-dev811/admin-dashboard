import { connect } from 'react-redux';
import { fetchWeatherRequested } from './actions';

import Weather from '../Weather.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetWeather }) => {
  console.log('aaa', widgetWeather);
  return ({
    ...widgetWeather,
  });
};

const mergeProps = ({ data, config }, { dispatch }) => {
  console.log('dsds', data, config)
  return ({
    data,
    config,
    onSubmit(searchQuery) {
      dispatch(fetchWeatherRequested(searchQuery));
    },
  });
};

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Weather));
