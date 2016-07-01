import React, { PropTypes } from 'react';

import AwesomeComponent from './AwesomeComponent.jsx';
import GoalsList from './GoalsList.jsx';
import SomeComponent from './SomeComponent.jsx';
import TodoList from './TodoList.jsx';

const RouteHome = ({ goals, info }) => {

  return (
    <div>
      <SomeComponent name='Vincent' children={<span>Children can be anything</span>} />
      <AwesomeComponent />
      <GoalsList goals={goals} />

      {info.map(x => <p key={x.id}>INFO: <b>{x.desc}</b></p>)}

      <TodoList />
    </div>
  )
};

RouteHome.propTypes = {
  goals: PropTypes.array,
  info: PropTypes.array,
};

export default RouteHome;
