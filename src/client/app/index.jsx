import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import configureStore from './root/store';
import Application from './root/Application.jsx';

const store = configureStore({ history: browserHistory });
const history = syncHistoryWithStore(browserHistory, store);

firebase.initializeApp({
  apiKey: 'AIzaSyCXQ9Q_HxoaOw05iNaHHmmEgSdh5nfgxRA',
  authDomain: 'new-tab-dashboard-162413.firebaseapp.com',
  databaseURL: 'https://new-tab-dashboard-162413.firebaseio.com',
  storageBucket: 'new-tab-dashboard-162413.appspot.com',
});

// BUG ReferenceError: firebase is not defined
// https://github.com/szaranger/firebase-saga/issues/14
window.firebase = firebase;

require('./scss/style.scss');

ReactDOM.render(
  <Application store={store} history={history} />,
  document.getElementById('app')
);
