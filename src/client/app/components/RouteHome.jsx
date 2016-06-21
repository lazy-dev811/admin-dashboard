import React, { PropTypes } from 'react';

import AwesomeComponent from './AwesomeComponent.jsx';
import GoalsList from './GoalsList.jsx';
import SomeComponent from './SomeComponent.jsx';

const RouteHome = ({ goals }) => {
  return (
    <div>
      <SomeComponent name='Vincent' children={<span>Children can be anything</span>} />
      <AwesomeComponent />
      <GoalsList goals={goals} />
    </div>
  )
};

RouteHome.propTypes = {
  goals: PropTypes.array,
};

export default RouteHome;
