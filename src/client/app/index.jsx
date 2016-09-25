import React from 'react';
import { render } from 'react-dom';
// require("!style!css!sass!./scss/style.scss");

import Application from './Application.jsx';

class App extends React.Component{
  render() {
    return (
      <div>
        <Application />
      </div>
    )
  }
};

render(<App />, document.getElementById('app'));
