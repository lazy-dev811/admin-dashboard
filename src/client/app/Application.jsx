import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import AppLayout from './components/AppLayout.jsx';
import RouteHomeContainer from './containers/RouteHomeContainer.js';
import RouteAboutContainer from './containers/RouteAboutContainer.js';

export default function Application({}) {
  return (
    <Router history={browserHistory}>
      <Route component={AppLayout}>
        <Route path="src/client" component={RouteHomeContainer}></Route>
        <Route path="/about" component={RouteAboutContainer}></Route>
      </Route>
    </Router>
  )
}
