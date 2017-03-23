import { fork } from 'redux-saga/effects';

import { firebaseExampleSagas } from '../components/FirebaseExample/redux/sagas';
import { blogSagas } from '../components/Blog/redux/sagas';
import { quoteSagas } from '../components/Quote/redux/sagas';
import { youtubePlayerSagas } from '../components/YoutubePlayer/redux/sagas';

import weatherSagas from '../components/Weather/redux/sagas';

function* rootSagas() {
  yield* [
    fork(firebaseExampleSagas),
    fork(blogSagas),
    fork(quoteSagas),
    fork(youtubePlayerSagas),
    fork(weatherSagas),
  ];
}

export default rootSagas;
