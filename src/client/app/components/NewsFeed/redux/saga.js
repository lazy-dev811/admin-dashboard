import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  GET_NEWSFEEDS_REQUESTED,
  getNewsFeedsSucceeded,
  getNewsFeedsFailed,

  ADD_NEWSFEED_REQUESTED,
  addNewsFeedSucceeded,
  addNewsFeedFailed,

  REMOVE_NEWSFEED_REQUESTED,
  removeNewsFeedSucceeded,
  removeNewsFeedFailed,
} from './actions';


function* getNewsFeeds() {
  try {
    const newsfeeds = yield call(getAll, 'newsfeeds');
    yield put(getNewsFeedsSucceeded(newsfeeds));
  } catch (error) {
    yield put(getNewsFeedsFailed(error));
  }
}

function* addNewsFeed(dispatch) {
  const { newsfeed, id } = dispatch.newsfeed;
  const newsfeedKey = `newsfeeds/${id}`;

  try {
    yield call(create, 'newsfeeds', () => ({
      [newsfeedKey]: { ...newsfeed, id },
    }));
    yield put(addNewsFeedSucceeded(newsfeed, id));
  } catch (error) {
    yield put(addNewsFeedFailed(error));
  }
}

function* removeNewsFeed(action) {
  const id = action.id;

  try {
    yield call(remove, 'newsfeeds', id);
    yield put(removeNewsFeedSucceeded(id));
  } catch (error) {
    yield put(removeNewsFeedFailed(error));
  }
}

function* newsfeedSagas() {
  yield* [
    takeEvery(GET_NEWSFEEDS_REQUESTED, getNewsFeeds),
    takeEvery(ADD_NEWSFEED_REQUESTED, addNewsFeed),
    takeEvery(REMOVE_NEWSFEED_REQUESTED, removeNewsFeed),
  ];
}

export default newsfeedSagas;
