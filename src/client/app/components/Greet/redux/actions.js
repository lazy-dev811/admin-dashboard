export const FETCH_WEATHER_REQUESTED = 'FETCH_WEATHER_REQUESTED';
export const FETCH_WEATHER_SUCCEEDED = 'FETCH_WEATHER_SUCCEEDED';
export const FETCH_WEATHER_FAILED = 'FETCH_WEATHER_FAILED';

export const fetchWeatherRequested = searchQuery => ({
  type: FETCH_WEATHER_REQUESTED,
  searchQuery,
});

export const fetchWeatherSucceeded = payload => ({
  type: FETCH_WEATHER_SUCCEEDED,
  payload,
});

export const fetchWeatherFailed = payload => ({
  type: FETCH_WEATHER_FAILED,
  payload,
});
