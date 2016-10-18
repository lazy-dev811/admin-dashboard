import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  FETCH_POSTS_REQUESTED,
  fetchPostsSucceeded,
  fetchPostsFailed,

  ADD_POST_REQUESTED,
  addPostSucceeded,
  addPostFailed,

  REMOVE_POST_REQUESTED,
  removePostSucceeded,
  removePostFailed,
} from './actions';


const API_KEY = '?=09809809809';
const URL = 'http://reduxblog.herokuapp.com/api/posts';


function* fetchPosts() {
  const url = `${URL}${API_KEY}`;

  try {
    const postsData = yield call(axios.get, url);
    yield put(fetchPostsSucceeded(postsData));
  } catch (error) {
    yield put(fetchPostsFailed(error));
  }
}

// function* addPost(post) {
  // const url = `${URL}/${postId}${API_KEY}`;
  //
  // try {
  //   const postsData = yield call(axios.delete, url);
  //   yield put(removePostSucceeded(postsData));
  // } catch (error) {
  //   yield put(removePostFailed(error));
  // }
// }

function* removePost(action) {
  const postId = action.postId;
  const url = `${URL}/${postId}${API_KEY}`;

  try {
    const postsData = yield call(axios.delete, url);
    yield put(removePostSucceeded(postsData));
  } catch (error) {
    yield put(removePostFailed(error));
  }
}

export function* blogSagas() {
  yield* [
    takeEvery(FETCH_POSTS_REQUESTED, fetchPosts),
    // takeEvery(ADD_POST_REQUESTED, addPost),
    takeEvery(REMOVE_POST_REQUESTED, removePost),
  ];
}

export default blogSagas;
