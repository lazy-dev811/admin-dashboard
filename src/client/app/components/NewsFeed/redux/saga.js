import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  getSourcesSucceeded,
  getSourcesFailed,

  getActiveSourcesSucceeded,
  getActiveSourcesFailed,

  GET_SOURCES_AND_ARTICLES_REQUESTED,
  getSourcesAndArticlesSucceeded,
  getSourcesAndArticlesFailed,

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
const BASE_SOURCES_URL = 'https://newsapi.org/v1/sources?language=en';
const BASE_ARTICLES_URL = 'https://newsapi.org/v1/articles';

function* getSources() {
  try {
    const payload = yield call(axios.get, BASE_SOURCES_URL);
    yield put(getSourcesSucceeded(payload));
  } catch (error) {
    yield put(getSourcesFailed(error));
  }
}

function* getActiveSources() {
  try {
    const payload = yield call(getAll, 'newsfeed');
    yield put(getActiveSourcesSucceeded(payload || []));
    return payload;
  } catch (error) {
    yield put(getActiveSourcesFailed(error));
  }
  return false;
}

function* getSourcesAndArticles() {
  function* iterateOverActiveSources(array) {
    for (const activeSource of array) {
      const url = `${BASE_ARTICLES_URL}?source=${activeSource}&apiKey=${API_KEY}`;
      try {
        const payload = yield call(axios.get, url);
        yield put(getSourcesAndArticlesSucceeded(payload, activeSource));
      } catch (error) {
        yield put(getSourcesAndArticlesFailed(error));
      }
    }
  }

  yield getSources();
  const activeSources = yield getActiveSources();

  if (activeSources) {
    const activeSourcesKeys = Object.keys(activeSources);
    yield iterateOverActiveSources(activeSourcesKeys);
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
  const { source } = action;
  const { id } = source;

  try {
    yield call(remove, 'newsfeed', id);
    yield put(removeSourceSucceeded(source));
  } catch (error) {
    yield put(removeSourceFailed(error));
  }
}

function* newsfeedSagas() {
  yield* [
    takeEvery(GET_SOURCES_AND_ARTICLES_REQUESTED, getSourcesAndArticles),
    takeEvery(TOGGLE_ACTIVE_CATEGORY_REQUESTED, toggleActiveCategory),
    takeEvery(ADD_SOURCE_REQUESTED, addSource),
    takeEvery(REMOVE_SOURCE_REQUESTED, removeSource),
  ];
}

export default newsfeedSagas;
