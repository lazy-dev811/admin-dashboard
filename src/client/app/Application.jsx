import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import store from './store/configureStore';

import AppLayout from './components/AppLayout/AppLayout.jsx';
import RouteHomeContainer from './containers/RouteHomeContainer.js';
import RouteAboutContainer from './containers/RouteAboutContainer.js';

const Application = ({ store, history }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={AppLayout}>
        <Route path="src/client" component={RouteHomeContainer}></Route>
        <Route path="/about" component={RouteAboutContainer}></Route>
      </Route>
    </Router>
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Application;
