import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  getSourcesSucceeded,
  getSourcesFailed,

  getActiveSourcesSucceeded,
  getActiveSourcesFailed,

  getActiveCategoriesSucceeded,
  getActiveCategoriesFailed,

  getFilteredSourcesSucceeded,
  getFilteredSourcesFailed,

  getSourceLogosSucceeded,
  getSourceLogosFailed,

  GET_SOURCES_AND_ARTICLES_REQUESTED,
  getSourcesAndArticlesSucceeded,
  getSourcesAndArticlesFailed,

  ADD_SOURCE_REQUESTED,
  addSourceSucceeded,
  addSourceFailed,

  ADD_ACTIVE_CATEGORY_REQUESTED,
  addActiveCategorySucceeded,
  addActiveCategoryFailed,

  REMOVE_ACTIVE_CATEGORY_REQUESTED,
  removeActiveCategorySucceeded,
  removeActiveCategoryFailed,

  REMOVE_SOURCE_REQUESTED,
  removeSourceSucceeded,
  removeSourceFailed,
} from './actions';


const API_KEY = '6210521b9db348e29061b65e272b0efd';
const BASE_SOURCES_URL = 'https://newsapi.org/v1/sources?language=en';
const BASE_ARTICLES_URL = 'https://newsapi.org/v1/articles';

const firebaseNewsFeedRoot = 'widgets/newsfeed';
const firebaseActiveSources = `${firebaseNewsFeedRoot}/data/active-sources`;
const firebaseFilteredSources = `${firebaseNewsFeedRoot}/data/filtered-sources`;

const firebaseActiveCategories = `${firebaseNewsFeedRoot}/data/active-categories`;

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
    const payload = yield call(getAll, firebaseActiveSources);
    yield put(getActiveSourcesSucceeded(payload || []));
    return payload;
  } catch (error) {
    yield put(getActiveSourcesFailed(error));
  }
  return false;
}

function* getActiveCategories() {
  try {
    const payload = yield call(getAll, firebaseActiveCategories);
    yield put(getActiveCategoriesSucceeded(payload));
  } catch (error) {
    yield put(getActiveCategoriesFailed(error));
  }
}

function* getFilteredSources() {
  try {
    const payload = yield call(getAll, firebaseFilteredSources);
    yield put(getFilteredSourcesSucceeded(payload));
  } catch (error) {
    yield put(getFilteredSourcesFailed(error));
  }
}

function* getSourceLogos() {
  try {
    const payload = yield call(getAll, `${firebaseNewsFeedRoot}/assets/sources`);
    yield put(getSourceLogosSucceeded(payload));
  } catch (error) {
    yield put(getSourceLogosFailed(error));
  }
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
  yield getActiveCategories();
  yield getSourceLogos();
  yield getFilteredSources();
  const activeSources = yield getActiveSources();

  if (activeSources) {
    const activeSourcesKeys = Object.keys(activeSources);
    yield iterateOverActiveSources(activeSourcesKeys);
  }
}

function* addSource(dispatch) {
  const { source } = dispatch;
  const id = source.id;
  const newsfeedKey = `${firebaseActiveSources}/${id}`;

  try {
    yield call(create, firebaseActiveSources, () => ({
      [newsfeedKey]: { ...source, id },
    }));
    yield put(addSourceSucceeded(source, id));
  } catch (error) {
    yield put(addSourceFailed(error));
  }
}

function* addActiveCategory(dispatch) {
  const { category } = dispatch;
  const id = category;
  const activeCategoryKey = `${firebaseActiveCategories}/${id}`;

  try {
    yield call(create, firebaseActiveCategories, () => ({
      [activeCategoryKey]: category,
    }));
    yield put(addActiveCategorySucceeded(category));
  } catch (error) {
    yield put(addActiveCategoryFailed(error));
  }
}

function* removeActiveCategory(dispatch) {
  const { category } = dispatch;
  const id = category;

  try {
    yield call(remove, firebaseActiveCategories, id);
    yield put(removeActiveCategorySucceeded(category));
  } catch (error) {
    yield put(removeActiveCategoryFailed(error));
  }
}

function* removeSource(action) {
  const { source } = action;
  const { id } = source;

  try {
    yield call(remove, firebaseActiveSources, id);
    yield put(removeSourceSucceeded(source));
  } catch (error) {
    yield put(removeSourceFailed(error));
  }
}

function* newsfeedSagas() {
  yield* [
    takeEvery(GET_SOURCES_AND_ARTICLES_REQUESTED, getSourcesAndArticles),
    takeEvery(ADD_ACTIVE_CATEGORY_REQUESTED, addActiveCategory),
    takeEvery(REMOVE_ACTIVE_CATEGORY_REQUESTED, removeActiveCategory),
    takeEvery(ADD_SOURCE_REQUESTED, addSource),
    takeEvery(REMOVE_SOURCE_REQUESTED, removeSource),
  ];
}

export default newsfeedSagas;
