import { FETCH_WEATHER_SUCCEEDED } from './actions.js';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetWeather',
  widgetName: 'Weather',
  weatherList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCEEDED: {
      return {
        ...state,
        weatherList: [
          ...state.weatherList,
          action.payload.data,
        ],
      };
    }

    default: {
      return state;
    }
  }
};
