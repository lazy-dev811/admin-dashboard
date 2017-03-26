import moment from 'moment';

import { DATE_FORMAT } from '../../../constants';
import {
  FETCH_WEATHER_REQUESTED,
  FETCH_WEATHER_SUCCEEDED,
  FETCH_WEATHER_FAILED,
} from './actions.js';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetGreet',
  widgetName: 'Greet',
  person: {
    name: 'Vincent',
    surname: 'Bollaert',
  },
  date: moment().format(DATE_FORMAT),
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
        },
      };
    }

    case FETCH_WEATHER_SUCCEEDED: {
      return {
        ...state,
        weatherData: action.payload.data,
        asyncStatus: {
          inProgress: false,
          error: false,
        },
      };
    }

    case FETCH_WEATHER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.payload.error,
        },
      };
    }

    default: {
      return state;
    }
  }
};
