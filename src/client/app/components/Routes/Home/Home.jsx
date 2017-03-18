import React, { PropTypes } from 'react';

import ColorPicker from '../../ColorPicker/redux/container.js';
import TodoListContainer from '../../../containers/TodoListContainer.js';
import YoutubePlayer from '../../YoutubePlayer/redux/container.js';
import Blog from '../../Blog/redux/container';
import Slider from '../../Slider/redux/container.js';
import Bookmarks from '../../Bookmarks/redux/container.js';
import Greet from '../../Greet/redux/container.js';
import Quote from '../../Quote/redux/container.js';
import SliderDetail from '../../SliderDetail/redux/container.js';
import Weather from '../../Weather/redux/container.js';

const widgets = [
  {
    name: 'color picker',
    component: <ColorPicker />,
  },
  {
    name: 'todo list',
    component: <TodoListContainer />,
  },
  {
    name: 'youtube player',
    component: <YoutubePlayer />,
  },
  {
    name: 'weather',
    component: <Weather />,
  },
  {
    name: 'blog',
    component: <Blog />,
  },
  {
    name: 'bookmarks',
    component: <Bookmarks />,
  },
  {
    name: 'slider detail',
    component: <SliderDetail />,
  },
  {
    name: 'greet',
    component: <Greet />,
  },
  {
    name: 'quote',
    component: <Quote />,
  },
];

const Home = ({ activeWidgets }) => (
  <div className="page">
    {widgets.map(widget => activeWidgets.includes(widget.name) && widget.component)}
    <Slider />
  </div>
);

Home.propTypes = {
  activeWidgets: PropTypes.array.isRequired,
};

export default Home;
