import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  GET_QUOTE_REQUESTED,
  getQuoteSucceeded,
  getQuoteFailed,
} from './actions';

const URL = 'https://crossorigin.me/http://api.forismatic.com/api/1.0/';

function* getQuote() {
  const url = `${URL}?method=getQuote&format=json&lang=en`;

  try {
    const quoteData = yield call(axios.get, url);
    yield put(getQuoteSucceeded(quoteData));
  } catch (error) {
    yield put(getQuoteFailed(error));
  }
}

function* quoteSagas() {
  yield* [
    takeEvery(GET_QUOTE_REQUESTED, getQuote),
  ];
}

export default quoteSagas;
