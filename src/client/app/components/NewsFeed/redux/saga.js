import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  getSourcesFailed,

  getActiveSourcesFailed,

  getFilteredSourcesFailed,

  getFilteredCategoriesFailed,

  getSourceLogosFailed,

  setVisibleSources,

  setVisibleArticles,

  setSources,

  GET_ARTICLES_REQUESTED,
  getArticlesSucceeded,
  getArticlesFailed,

  GET_SOURCES_AND_FILTERS_REQUESTED,

  ADD_SOURCE_REQUESTED,
  addSourceSucceeded,
  addSourceFailed,

  ADD_FILTERED_CATEGORY_REQUESTED,
  addFilteredCategorySucceeded,
  addFilteredCategoryFailed,

  REMOVE_FILTERED_CATEGORY_REQUESTED,
  removeFilteredCategorySucceeded,
  removeFilteredCategoryFailed,

  ADD_FILTERED_SOURCE_REQUESTED,
  addFilteredSourceSucceeded,
  addFilteredSourceFailed,

  REMOVE_FILTERED_SOURCE_REQUESTED,
  removeFilteredSourceSucceeded,
  removeFilteredSourceFailed,

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
const firebaseFilteredCategories = `${firebaseNewsFeedRoot}/data/filtered-categories`;

function* getSources() {
  try {
    return yield call(axios.get, BASE_SOURCES_URL);
  } catch (error) {
    return yield put(getSourcesFailed(error));
  }
}

function* getActiveSources() {
  try {
    return yield call(getAll, firebaseActiveSources);
  } catch (error) {
    return yield put(getActiveSourcesFailed(error));
  }
}

function* getFilteredSources() {
  try {
    return yield call(getAll, firebaseFilteredSources);
  } catch (error) {
    return yield put(getFilteredSourcesFailed(error));
  }
}

function* getFilteredCategories() {
  try {
    return yield call(getAll, firebaseFilteredCategories);
  } catch (error) {
    return yield put(getFilteredCategoriesFailed(error));
  }
}

function* getSourceLogos() {
  try {
    return yield call(getAll, `${firebaseNewsFeedRoot}/assets/sources`);
  } catch (error) {
    return yield put(getSourceLogosFailed(error));
  }
}

function* getArticles(array) {
  const data = [];
  for (const activeSource of array) {
    const url = `${BASE_ARTICLES_URL}?source=${activeSource}&apiKey=${API_KEY}`;
    try {
      const payload = yield call(axios.get, url);
      data.push({ source: activeSource, articles: payload.data.articles });
      if (activeSource === array[array.length - 1]) {
        yield put(getArticlesSucceeded(data));
      }
    } catch (error) {
      yield put(getArticlesFailed(error));
    }
  }
}

function* getSourcesAndFilters() {
  const sourcesData = {
    sources: yield getSources(),
    activeSources: yield getActiveSources(),
    filteredSources: yield getFilteredSources(),
    sourceLogos: yield getSourceLogos(),
    filteredCategories: yield getFilteredCategories(),
  };

  yield put(setSources(sourcesData));
  yield put(setVisibleSources());

  if (sourcesData.activeSources) {
    const activeSourcesKeys = Object.keys(sourcesData.activeSources);
    yield getArticles(activeSourcesKeys);
    yield put(setVisibleArticles());
  }
}

function* addSource(dispatch) {
  const { source, activeSources } = dispatch;
  const { id, name } = source;
  const newsfeedKey = `${firebaseActiveSources}/${id}`;
  const activeSourcesIds = [
    ...activeSources.map(activeSource => activeSource.id),
    id,
  ];

  try {
    yield call(create, firebaseActiveSources, () => ({
      [newsfeedKey]: { id, name },
    }));
    yield put(addSourceSucceeded(source));
    yield getArticles(activeSourcesIds);
  } catch (error) {
    yield put(addSourceFailed(error));
  }
}

function* removeSource(dispatch) {
  const { source: { id }, activeSources } = dispatch;
  const activeSourcesIds = [
    ...activeSources.map(activeSource => activeSource.id),
    id,
  ];

  try {
    yield call(remove, firebaseActiveSources, id);
    yield put(removeSourceSucceeded(id));
    yield getArticles(activeSourcesIds);
  } catch (error) {
    yield put(removeSourceFailed(error));
  }
}

function* addFilteredCategory(dispatch) {
  const { category } = dispatch;
  const id = category;
  const filteredCategoryKey = `${firebaseFilteredCategories}/${id}`;

  try {
    yield call(create, firebaseFilteredCategories, () => ({
      [filteredCategoryKey]: category,
    }));
    yield put(addFilteredCategorySucceeded(category));
    yield put(setVisibleSources());
  } catch (error) {
    yield put(addFilteredCategoryFailed(error));
  }
}

function* removeFilteredCategory(dispatch) {
  const { category } = dispatch;
  const id = category;

  try {
    yield call(remove, firebaseFilteredCategories, id);
    yield put(removeFilteredCategorySucceeded(category));
    yield put(setVisibleSources());
  } catch (error) {
    yield put(removeFilteredCategoryFailed(error));
  }
}

function* addFilteredSource(dispatch) {
  const { source } = dispatch;
  const id = source;
  const filteredSourceKey = `${firebaseFilteredSources}/${id}`;

  try {
    yield call(create, firebaseFilteredSources, () => ({
      [filteredSourceKey]: source,
    }));
    yield put(addFilteredSourceSucceeded(source));
    yield put(setVisibleArticles());
  } catch (error) {
    yield put(addFilteredSourceFailed(error));
  }
}

function* removeFilteredSource(dispatch) {
  const { source } = dispatch;
  const id = source;

  try {
    yield call(remove, firebaseFilteredSources, id);
    yield put(removeFilteredSourceSucceeded(source));
    yield put(setVisibleArticles());
  } catch (error) {
    yield put(removeFilteredSourceFailed(error));
  }
}

function* newsfeedSagas() {
  yield* [
    takeEvery(GET_ARTICLES_REQUESTED, getArticles),
    takeEvery(GET_SOURCES_AND_FILTERS_REQUESTED, getSourcesAndFilters),
    takeEvery(ADD_FILTERED_CATEGORY_REQUESTED, addFilteredCategory),
    takeEvery(REMOVE_FILTERED_CATEGORY_REQUESTED, removeFilteredCategory),
    takeEvery(REMOVE_FILTERED_SOURCE_REQUESTED, removeFilteredSource),
    takeEvery(ADD_FILTERED_SOURCE_REQUESTED, addFilteredSource),
    takeEvery(ADD_SOURCE_REQUESTED, addSource),
    takeEvery(REMOVE_SOURCE_REQUESTED, removeSource),
  ];
}

export default newsfeedSagas;
