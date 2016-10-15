import { FETCH_WEATHER_SUCCEEDED } from './actions.js';

const initialState = [];

const fetchWeatherRequested = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCEEDED: {
      return [
        ...state,
        action.payload.data,
      ];
    }

    default: {
      return state;
    }
  }
};

export default fetchWeatherRequested;
