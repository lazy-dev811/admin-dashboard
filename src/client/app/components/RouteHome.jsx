import React from 'react';

// import TodoListContainer from '../containers/TodoListContainer.js';
// import YoutubePlayer from './YoutubePlayer/redux/container.js';
// import Blog from './Blog/redux/container';
import Slider from './Slider/redux/container.js';
// import Greet from './Greet/redux/container.js';
// import Quote from './Quote/redux/container.js';
// import SliderDetail from './SliderDetail/redux/container.js';
// import Weather from './Weather/redux/container.js';

const RouteHome = () => (
  <div className="page">
    {/* <TodoListContainer /> */}
    {/* <YoutubePlayer /> */}
    {/* <Blog /> */}
    <Slider />
    {/* <Greet /> */}
    {/* <Quote /> */}
    {/* <SliderDetail /> */}
    {/* <Weather /> */}
  </div>
);

RouteHome.propTypes = {};

export default RouteHome;
