import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  FIREBASE_FETCH_POSTS_REQUESTED,
  firebaseFetchPostsSucceeded,
  firebaseFetchPostsFailed,

  FIREBASE_FETCH_POST_REQUESTED,
  firebaseFetchPostSucceeded,
  firebaseFetchPostFailed,

  FIREBASE_ADD_POST_REQUESTED,
  firebaseAddPostSucceeded,
  firebaseAddPostFailed,

  FIREBASE_REMOVE_POST_REQUESTED,
  firebaseRemovePostSucceeded,
  firebaseRemovePostFailed,
} from './actions';


const API_KEY = '?=09809809809';
const URL = 'http://reduxblog.herokuapp.com/api/posts';


function* fetchPosts() {
  const url = `${URL}${API_KEY}`;

  try {
    const postsData = yield call(axios.get, url);
    yield put(firebaseFetchPostsSucceeded(postsData));
  } catch (error) {
    yield put(firebaseFetchPostsFailed(error));
  }
}

function* fetchPost(dispatch) {
  const postId = dispatch.postId;
  const url = `${URL}/${postId}${API_KEY}`;

  try {
    const postData = yield call(axios.get, url);
    yield put(firebaseFetchPostSucceeded(postData.data));
  } catch (error) {
    yield put(firebaseFetchPostFailed(error));
  }
}

function* addPost(dispatch) {
  const url = `${URL}/${API_KEY}`;
  const formValues = dispatch.formValues;

  try {
    const postsData = yield call(axios.post, url, formValues);
    yield put(firebaseAddPostSucceeded(postsData));
  } catch (error) {
    yield put(firebaseAddPostFailed(error));
  }
}

function* removePost(action) {
  const postId = action.postId;
  const url = `${URL}/${postId}${API_KEY}`;

  try {
    yield call(axios.delete, url);
    yield put(firebaseRemovePostSucceeded(postId));
  } catch (error) {
    yield put(firebaseRemovePostFailed(error));
  }
}

export function* firebaseExampleSagas() {
  yield* [
    takeEvery(FIREBASE_FETCH_POSTS_REQUESTED, fetchPosts),
    takeEvery(FIREBASE_FETCH_POST_REQUESTED, fetchPost),
    takeEvery(FIREBASE_ADD_POST_REQUESTED, addPost),
    takeEvery(FIREBASE_REMOVE_POST_REQUESTED, removePost),
  ];
}

export default firebaseExampleSagas;
