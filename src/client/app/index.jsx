import React from 'react';
import { render } from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import GoalsList from './GoalsList.jsx';

const GOALS = [
  {
    id: 0,
    name: 'learn react',
  },{
    id: 1,
    name: 'learn webpack',
  },{
    id: 2,
    name: 'learn redux',
  },{
    id: 3,
    name: 'react hot loader',
  }
];

class App extends React.Component{
  render() {
    return (
      <div>
        <AwesomeComponent />
        <GoalsList goals={this.props.goals} />
      </div>
    )
  }
};

render(<App goals={GOALS} />, document.getElementById('app'));
