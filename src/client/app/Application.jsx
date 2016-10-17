import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes.jsx';

const Application = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
};

export default Application;
