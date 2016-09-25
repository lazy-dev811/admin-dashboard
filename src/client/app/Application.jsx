import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/configureStore';

import AppLayout from './components/AppLayout/AppLayout.jsx';
import RouteHomeContainer from './containers/RouteHomeContainer.js';
import RouteAboutContainer from './containers/RouteAboutContainer.js';

export default function Application({}) {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={AppLayout}>
          <Route path="src/client" component={RouteHomeContainer}></Route>
          <Route path="/about" component={RouteAboutContainer}></Route>
        </Route>
      </Router>
    </Provider>
  )
}
