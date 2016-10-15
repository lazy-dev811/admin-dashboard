export const FETCH_WEATHER_REQUESTED = 'FETCH_WEATHER_REQUESTED';
export const FETCH_WEATHER_SUCCEEDED = 'FETCH_WEATHER_SUCCEEDED';
export const FETCH_WEATHER_FAILED = 'FETCH_WEATHER_FAILED';

export const fetchWeatherRequested = searchQuery => ({
  type: FETCH_WEATHER_REQUESTED,
  searchQuery,
});

export const fetchWeatherSucceeded = (payload) => {
  console.log('success');
  return {
    type: FETCH_WEATHER_SUCCEEDED,
    payload,
  };
};

export const fetchWeatherFailed = (payload) => {
  console.log('failed', payload);
  return {
    type: FETCH_WEATHER_FAILED,
    payload,
  };
};
