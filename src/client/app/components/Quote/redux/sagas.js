import axios from 'axios';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import {
  GET_QUOTE_REQUESTED,
  getQuoteSucceeded,
  getQuoteFailed,

} from './actions';

const URL = 'https://crossorigin.me/http://api.forismatic.com/api/1.0/';
const params = {
  method: 'method=getQuote',
  format: 'json',
  lang: 'en',
};

function* getQuote() {
  const url = `${URL}?method=getQuote&format=json&lang=en`;

  try {
    const quoteData = yield call(axios.get, url);
    yield put(getQuoteSucceeded(quoteData));
  } catch (error) {
    yield put(getQuoteFailed(error));
  }
}

export function* quoteSagas() {
  yield* [
    takeEvery(GET_QUOTE_REQUESTED, getQuote),
  ];
}

export default quoteSagas;