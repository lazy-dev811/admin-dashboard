import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { FETCH_WEATHER_REQUESTED, fetchWeatherSucceeded, fetchWeatherFailed } from '../actions';


// const API_KEY = '8b8fdbe46cc1b907383d8f937198939e';
// const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// export const FETCH_WEATHER = 'FETCH_WEATHER';
// export const fetchWeather = (city) => {
//   const url = `${URL}&q=${city}`
//   const request = axios.get(url)
//
//   return {
//     type: FETCH_WEATHER,
//   };
// };


function* fetchWeather() {
  try {
    const weatherData = yield call(axios.get, 'http://api.openweathermap.org/data/2.5/forecast?appid=8b8fdbe46cc1b907383d8f937198939e&q=capetown');
    yield put(fetchWeatherSucceeded(weatherData));
  } catch (error) {
    yield put(fetchWeatherFailed(error));
  }
}

function* mySaga() {
  yield* takeEvery(FETCH_WEATHER_REQUESTED, fetchWeather);
}

export default mySaga;
