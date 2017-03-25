import { fork } from 'redux-saga/effects';

import { todoSagas } from '../components/Todo/redux/sagas';
import { quoteSagas } from '../components/Quote/redux/sagas';
import { youtubePlayerSagas } from '../components/YoutubePlayer/redux/sagas';

import weatherSagas from '../components/Weather/redux/sagas';

function* rootSagas() {
  yield* [
    fork(todoSagas),
    fork(quoteSagas),
    fork(youtubePlayerSagas),
    fork(weatherSagas),
  ];
}

export default rootSagas;
