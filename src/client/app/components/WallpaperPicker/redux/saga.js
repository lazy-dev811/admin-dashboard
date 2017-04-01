import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  GET_WALLPAPERS_REQUESTED,
  getWallpapersSucceeded,
  getWallpapersFailed,

  GET_WALLPAPER_REQUESTED,
  getWallpaperSucceeded,
  getWallpaperFailed,
} from './actions';


function* getWallpapers() {
  const URL = 'https://api.desktoppr.co/1/wallpapers?page=208';

  try {
    const wallpaperData = yield call(axios.get, URL);
    yield put(getWallpapersSucceeded(wallpaperData));
  } catch (error) {
    yield put(getWallpapersFailed(error));
  }
}

// function* getWallpaper() {
  // console.log('GET WALLPAPER');
  // const URL = 'https://api.desktoppr.co/1/wallpapers/random';
  //
  // try {
  //   const wallpaperData = yield call(axios.get, URL);
  //   yield put(getWallpaperSucceeded(wallpaperData));
  // } catch(error) {
  //   yield put(getWallpaperFailed(error));
  // }
// }

function* wallpaperSagas() {
  yield* [
    takeEvery(GET_WALLPAPERS_REQUESTED, getWallpapers),
    // takeEvery(GET_WALLPAPER_REQUESTED, getWallpaper),
  ];
}


export default wallpaperSagas;
