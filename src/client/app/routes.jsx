import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppLayout from './components/AppLayout/AppLayout.jsx';
import RouteHomeContainer from './containers/RouteHomeContainer.js';
import RouteAboutContainer from './containers/RouteAboutContainer.js';

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={RouteHomeContainer} />
    <Route path="/about" component={RouteAboutContainer} />
  </Route>
);
