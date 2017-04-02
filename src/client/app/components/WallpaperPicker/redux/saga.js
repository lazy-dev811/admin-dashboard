import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { create, getAll } from 'firebase-saga';

import {
  GET_ACTIVE_WALLPAPER_REQUESTED,
  getActiveWallpaperSucceeded,
  getActiveWallpaperFailed,

  GET_WALLPAPERS_REQUESTED,
  getWallpapersSucceeded,
  getWallpapersFailed,

  SAVE_WALLPAPER_REQUESTED,
  saveWallpaperSucceeded,
  saveWallpaperFailed,
} from './actions';


function* getWallpapers() {
  try {
    let url = 'https://api.desktoppr.co/1/wallpapers';
    let data = yield call(axios.get, url);
    const amountOfPages = data.data.pagination.pages;
    const randomPage = Math.floor(Math.random() * amountOfPages);

    url = `https://api.desktoppr.co/1/wallpapers?page=${randomPage}`;
    data = yield call(axios.get, url);

    yield put(getWallpapersSucceeded(data));
  } catch (error) {
    yield put(getWallpapersFailed(error));
  }
}


function* getActiveWallpaper() {
  try {
    const test = yield call(getAll, 'activeWallpaperObj', 'activeWallpaperObj');
    yield put(getActiveWallpaperSucceeded(test));
  } catch (error) {
    yield put(getActiveWallpaperFailed(error));
  }
}

function* saveWallpaper(dispatch) {
  try {
    yield call(create, 'activeWallpaperObj', () => ({
      activeWallpaperObj: { ...dispatch.wallpaperObj },
    }));
    yield put(saveWallpaperSucceeded(dispatch.wallpaperObj));
  } catch (error) {
    yield put(saveWallpaperFailed(error));
  }
}

function* wallpaperSagas() {
  yield* [
    takeEvery(GET_ACTIVE_WALLPAPER_REQUESTED, getActiveWallpaper),
    takeEvery(GET_WALLPAPERS_REQUESTED, getWallpapers),
    takeEvery(SAVE_WALLPAPER_REQUESTED, saveWallpaper),
  ];
}


export default wallpaperSagas;
