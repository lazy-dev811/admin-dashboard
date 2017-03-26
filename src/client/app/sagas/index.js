import { fork } from 'redux-saga/effects';

import { todoSagas } from '../components/Todo/redux/sagas';
import { quoteSagas } from '../components/Quote/redux/sagas';
import { youtubePlayerSagas } from '../components/YoutubePlayer/redux/sagas';

import greetSagas from '../components/Greet/redux/sagas';

function* rootSagas() {
  yield* [
    fork(todoSagas),
    fork(quoteSagas),
    fork(youtubePlayerSagas),
    fork(greetSagas),
  ];
}

export default rootSagas;
