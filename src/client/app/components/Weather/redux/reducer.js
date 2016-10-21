import { FETCH_WEATHER_SUCCEEDED } from './actions.js';

const INITIAL_STATE = {
  data: {
    weatherList: [],
  },
  config: {
    components: {
      header: true,
      body: true,
    },
    position: {
      top: 400,
      left: 40,
    },
    dimensions: {},
    transparent: true,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCEEDED: {
      return {
        ...state,
        data: {
          weatherList: [
            ...state.data.weatherList,
            action.payload.data,
          ],
        },
      };
    }

    default: {
      return state;
    }
  }
};
