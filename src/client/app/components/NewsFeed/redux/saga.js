import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  GET_SOURCES_REQUESTED,
  getSourcesSucceeded,
  getSourcesFailed,

  ADD_SOURCE_REQUESTED,
  addSourceSucceeded,
  addSourceFailed,

  REMOVE_SOURCE_REQUESTED,
  removeSourceSucceeded,
  removeSourceFailed,
} from './actions';


const API_KEY = '6210521b9db348e29061b65e272b0efd';
const URL = 'https://newsapi.org/v1/sources?language=en';

function* getSources() {
  try {
    const payload = yield call(axios.get, URL);
    yield put(getSourcesSucceeded(payload));
  } catch (error) {
    yield put(getSourcesFailed(error));
  }
}

function* addSource(dispatch) {
  const { newsfeed, id } = dispatch.newsfeed;
  const newsfeedKey = `newsfeeds/${id}`;

  try {
    yield call(create, 'newsfeeds', () => ({
      [newsfeedKey]: { ...newsfeed, id },
    }));
    yield put(addSourceSucceeded(newsfeed, id));
  } catch (error) {
    yield put(addSourceFailed(error));
  }
}

function* removeSource(action) {
  const id = action.id;

  try {
    yield call(remove, 'newsfeeds', id);
    yield put(removeSourceSucceeded(id));
  } catch (error) {
    yield put(removeSourceFailed(error));
  }
}

function* newsfeedSagas() {
  yield* [
    takeEvery(GET_SOURCES_REQUESTED, getSources),
    takeEvery(ADD_SOURCE_REQUESTED, addSource),
    takeEvery(REMOVE_SOURCE_REQUESTED, removeSource),
  ];
}

export default newsfeedSagas;
