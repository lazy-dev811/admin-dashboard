import React from 'react';
import { render } from 'react-dom';

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
