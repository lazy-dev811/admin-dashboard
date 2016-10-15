import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Application from './Application.jsx';

require('./scss/style.scss');

const App = () => (
  <Application />
);

render(<App />, document.getElementById('app'));
