import React, { PropTypes } from 'react';

import Todo from '../../Todo';
import Bookmarks from '../../Bookmarks';
import Greet from '../../Greet/';
import Quote from '../../Quote';
import SliderDetail from '../../SliderDetail';
import YoutubePlayer from '../../YoutubePlayer';

const widgets = [
  {
    name: 'todo',
    component: <Todo />,
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
  {
    name: 'youtube player',
    component: <YoutubePlayer />,
  },
];

const Home = ({ activeWidgets }) => (
  <div className="page">
    {widgets.map((widget, i) => activeWidgets.includes(widget.name) && <div key={i}>{widget.component}</div>)}
  </div>
);

Home.propTypes = {
  activeWidgets: PropTypes.array.isRequired,
};

export default Home;
