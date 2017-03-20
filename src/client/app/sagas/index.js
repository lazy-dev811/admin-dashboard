import { fork } from 'redux-saga/effects';

import { blogSagas } from '../components/Blog/redux/sagas';
import { quoteSagas } from '../components/Quote/redux/sagas';
import { youtubePlayerSagas } from '../components/YoutubePlayer/redux/sagas';

import weatherSagas from '../components/Weather/redux/sagas';

function* rootSagas() {
  yield* [
    fork(youtubePlayerSagas),
    fork(blogSagas),
    fork(quoteSagas),
    fork(weatherSagas),
  ];
}

export default rootSagas;
