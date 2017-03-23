import React, { PropTypes } from 'react';

import FirebaseExample from '../../FirebaseExample/redux/container';
import Blog from '../../Blog/redux/container';
import Slider from '../../Slider/redux/container.js';
import Bookmarks from '../../Bookmarks/redux/container.js';
import Greet from '../../Greet/redux/container.js';
import Quote from '../../Quote/redux/container.js';
import SliderDetail from '../../SliderDetail/redux/container.js';
import Weather from '../../Weather/redux/container.js';
import YoutubePlayer from '../../YoutubePlayer/redux/container.js';

const widgets = [
  {
    name: 'firebaseExample',
    component: <FirebaseExample />,
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
  {
    name: 'youtube player',
    component: <YoutubePlayer />,
  },
  {
    name: 'weather',
    component: <Weather />,
  },
];

const Home = ({ activeWidgets }) => (
  <div className="page">
    {widgets.map((widget, i) => activeWidgets.includes(widget.name) && <div key={i}>{widget.component}</div>)}
    <Slider />
  </div>
);

Home.propTypes = {
  activeWidgets: PropTypes.array.isRequired,
};

export default Home;
