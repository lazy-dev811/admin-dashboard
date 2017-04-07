import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FETCH_WEATHER_REQUESTED, fetchWeatherSucceeded, fetchWeatherFailed } from './actions';


const API_KEY = 'e5c3832111c565060419efb6267e9a2e';
const URL = `https://api.darksky.net/forecast/${API_KEY}`;

function* fetchWeather(action) {
  const coordinates = '33.9249,18.4241';
  const url = `${URL}/${coordinates}`;

  try {
    const weatherData = yield call(axios.get, url);
    yield put(fetchWeatherSucceeded(weatherData));
  } catch (error) {
    yield put(fetchWeatherFailed(error));
  }
}

function* greetSagas() {
  yield* takeEvery(FETCH_WEATHER_REQUESTED, fetchWeather);
}

export default greetSagas;
