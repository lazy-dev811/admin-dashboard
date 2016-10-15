import React, { PropTypes } from 'react';

import TodoListContainer from '../containers/TodoListContainer.js';
import GreetContainer from './Greet/Container.js';
import QuoteContainer from '../containers/QuoteContainer.js';
import WeatherContainer from './Weather/Container.js';
// import SearchBarContainer from '../containers/Weather/SearchBarContainer';

const RouteHome = () => {
  return (
    <div>
      {/* <TodoListContainer /> */}
      <GreetContainer />
      <WeatherContainer />
      {/* <SearchBarContainer /> */}
      {/* <QuoteContainer /> */}
    </div>
  )
};

RouteHome.propTypes = {};

export default RouteHome;
