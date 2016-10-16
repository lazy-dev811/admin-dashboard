import React from 'react';

// import TodoListContainer from '../containers/TodoListContainer.js';
import GreetContainer from './Greet/redux/Container.js';
import QuoteContainer from './Quote/redux/Container.js';
// import Widget from './Widget/Widget.jsx';
import WeatherContainer from './Weather/redux/Container.js';

const RouteHome = () => (
  <div>
    {/* <TodoListContainer /> */}
    <GreetContainer />
    <QuoteContainer />
    <WeatherContainer />
    {/* <Widget title="Widget 1" xPos={100} yPos={100} /> */}
  </div>
);

RouteHome.propTypes = {};

export default RouteHome;
