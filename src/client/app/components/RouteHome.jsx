import React from 'react';

// import TodoListContainer from '../containers/TodoListContainer.js';
import YoutubePlayer from './YoutubePlayer/redux/container.js';
import Blog from './Blog/redux/container';
// import SliderContainer from '../containers/SliderContainer.js';
import Greet from './Greet/redux/container.js';
import Quote from './Quote/redux/container.js';
// import SliderDetail from './SliderDetail/redux/container.js';
// import Widget from './Widget/Widget.jsx';
// import Weather from './Weather/redux/container.js';

const RouteHome = () => (
  <div className="page">
    {/* <TodoListContainer /> */}
    <YoutubePlayer />
    {/* <Blog /> */}
    {/* <SliderContainer /> */}
    {/* <Greet /> */}
    {/* <Quote /> */}
    {/* <SliderDetail /> */}
    {/* <Weather /> */}
    {/* <Widget title="Widget 1" xPos={100} yPos={100} /> */}
  </div>
);

RouteHome.propTypes = {};

export default RouteHome;
