import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  GET_SOURCES_REQUESTED,
  getSourcesSucceeded,
  getSourcesFailed,

  GET_ACTIVE_SOURCES_REQUESTED,
  getActiveSourcesSucceeded,
  getActiveSourcesFailed,

  ADD_SOURCE_REQUESTED,
  addSourceSucceeded,
  addSourceFailed,

  TOGGLE_ACTIVE_CATEGORY_REQUESTED,
  toggleActiveCategorySucceeded,
  toggleActiveCategoryFailed,

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

function* getActiveSources() {
  try {
    const payload = yield call(getAll, 'newsfeed');
    yield put(getActiveSourcesSucceeded(payload));
  } catch (error) {
    yield put(getActiveSourcesFailed(error));
  }
}

function* addSource(dispatch) {
  const { source } = dispatch;
  const id = source.id;
  const newsfeedKey = `newsfeed/${id}`;

  try {
    yield call(create, 'newsfeed', () => ({
      [newsfeedKey]: { ...source, id },
    }));
    yield put(addSourceSucceeded(source, id));
  } catch (error) {
    yield put(addSourceFailed(error));
  }
}

function* toggleActiveCategory(dispatch) {
  const { category } = dispatch;
  const id = category;
  const activeCategoryKey = `newsfeed/activeCategories/${id}`;

  try {
    yield call(create, 'newsfeed/activeCategories', () => ({
      [activeCategoryKey]: category,
    }));
    yield put(toggleActiveCategorySucceeded(category));
  } catch (error) {
    yield put(toggleActiveCategoryFailed(error));
  }
}
function* removeSource(action) {
  const id = action.id;

  try {
    yield call(remove, 'newsfeed', id);
    yield put(removeSourceSucceeded(id));
  } catch (error) {
    yield put(removeSourceFailed(error));
  }
}

function* newsfeedSagas() {
  yield* [
    takeEvery(GET_SOURCES_REQUESTED, getSources),
    takeEvery(GET_ACTIVE_SOURCES_REQUESTED, getActiveSources),
    takeEvery(TOGGLE_ACTIVE_CATEGORY_REQUESTED, toggleActiveCategory),
    takeEvery(ADD_SOURCE_REQUESTED, addSource),
    takeEvery(REMOVE_SOURCE_REQUESTED, removeSource),
  ];
}

export default newsfeedSagas;
