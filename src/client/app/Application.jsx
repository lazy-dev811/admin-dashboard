import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import routes from 'routes';

import Home from './components/Home.jsx';

export default function Application({}) {
  return (
    <Router history={browserHistory}>
      <Route path="/src/client" component={Home} />
    </Router>
  )
}
