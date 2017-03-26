import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import YTSearch from 'youtube-api-search';

import {
  YOUTUBE_SEARCH_REQUESTED,
  youtubeSearchSucceeded,
  youtubeSearchFailed,
} from './actions';


const API_KEY = 'AIzaSyBSoHvaEKzgtRp6vfUDlnRorIdieTPRmFc';
function* youtubeSearch(dispatch) {
  try {
    const postsData = yield call(
      YTSearch, { key: API_KEY, term: dispatch.searchQuery }
    );
    yield put(youtubeSearchSucceeded(postsData));
  } catch (error) {
    yield put(youtubeSearchFailed(error));
  }
}

function* youtubePlayerSagas() {
  yield* [
    takeLatest(YOUTUBE_SEARCH_REQUESTED, youtubeSearch),
  ];
}

export default youtubePlayerSagas;
