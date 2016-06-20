import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/Layout.jsx';
import RouteHome from './components/RouteHome.jsx';
import RouteAbout from './components/RouteAbout.jsx';

export default function Application({}) {
  return (
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path="src/client" component={RouteHome}></Route>
        <Route path="/about" component={RouteAbout}></Route>
      </Route>
    </Router>
  )
}
