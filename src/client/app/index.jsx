import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import Application from './Application.jsx';

const store = configureStore({ history: browserHistory });
const history = syncHistoryWithStore(browserHistory, store);

require('./scss/style.scss');

ReactDOM.render(
  <Application store={store} history={history} />,
  document.getElementById('app')
);
