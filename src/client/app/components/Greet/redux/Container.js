import { connect } from 'react-redux';

import openWeatherMapConfig from '../openWeatherMapConfig.jsx';
import { fetchWeatherRequested } from './actions';
import Greet from '../Greet.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetGreet, config }) => ({ ...widgetGreet, ...config });

const mergeProps = ({ widgetIdentifier, person, date, weatherData, widgetGreet, asyncStatus }, { dispatch }) => {
  const weatherDataFormatted = weatherData && {
    temperature: weatherData.main.temp,
    temperatureMin: weatherData.main.temp_min,
    temperatureMax: weatherData.main.temp_max,
    windSpeed: weatherData.wind.speed,
    icon: openWeatherMapConfig.filter(config => config.id === weatherData.weather[0].id)[0].icon,
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
