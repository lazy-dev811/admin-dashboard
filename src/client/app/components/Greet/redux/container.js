import { connect } from 'react-redux';

import openWeatherMapConfig from '../openWeatherMapConfig.jsx';
import { fetchWeatherRequested } from './actions';
import Greet from '../Greet.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetGreet, config }) => ({ ...widgetGreet, ...config });

const mergeProps = ({ widgetIdentifier, person, date, weatherData, widgetGreet, asyncStatus }, { dispatch }) => {
  const weatherDataFormatted = weatherData && {
    temperature: weatherData.currently.temperature,
    windSpeed: weatherData.currently.windSpeed,
    icon: openWeatherMapConfig.filter(config => config.description === weatherData.currently.icon)[0].icon,
  };

  return ({
    widgetIdentifier,
    person,
    date,
    weatherData: weatherDataFormatted,
    config: widgetGreet,
    asyncStatus,
    getWeather(searchQuery) {
      dispatch(fetchWeatherRequested(searchQuery));
    },
  });
};

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Greet));
