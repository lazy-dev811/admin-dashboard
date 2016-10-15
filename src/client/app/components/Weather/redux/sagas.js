import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FETCH_WEATHER_REQUESTED, fetchWeatherSucceeded, fetchWeatherFailed } from './actions';


const API_KEY = '8b8fdbe46cc1b907383d8f937198939e';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


function* fetchWeather(action) {
  const city = action.searchQuery;
  const url = `${URL}&q=${city}`;

  try {
    const weatherData = yield call(axios.get, url);
    yield put(fetchWeatherSucceeded(weatherData));
  } catch (error) {
    yield put(fetchWeatherFailed(error));
  }
}

function* weatherSagas() {
  yield* takeEvery(FETCH_WEATHER_REQUESTED, fetchWeather);
}

export default weatherSagas;
