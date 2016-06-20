import React from 'react';

import PageHeader from './PageHeader.jsx';
import AwesomeComponent from './AwesomeComponent.jsx';
import GoalsList from './GoalsList.jsx';
import SomeComponent from './SomeComponent.jsx';

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

class RouteHome extends React.Component{
  render() {
    return (
      <div>
        <PageHeader />
        <SomeComponent name='Vincent' children={<span>Children can be anything</span>} />
        <AwesomeComponent />
        <GoalsList goals={GOALS} />
      </div>
    )
  }
};

export default RouteHome;
