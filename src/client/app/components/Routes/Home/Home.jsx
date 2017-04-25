import React, { PropTypes } from 'react';

import Todo from '../../Todo';
import Bookmarks from '../../Bookmarks';
import Greet from '../../Greet/';
import Quote from '../../Quote';
import SliderDetail from '../../SliderDetail';
import YoutubePlayer from '../../YoutubePlayer';
import NewsFeed from '../../NewsFeed';

const defaultWallpaper = require('../../../assets/images/nature-1.jpg');

const widgets = [
  {
    id: 'todo',
    component: <Todo />,
  },
  {
    id: 'bookmarks',
    component: <Bookmarks />,
  },
  {
    id: 'slider detail',
    component: <SliderDetail />,
  },
  {
    id: 'greet',
    component: <Greet />,
  },
  {
    id: 'quote',
    component: <Quote />,
  },
  {
    id: 'youtube player',
    component: <YoutubePlayer />,
  },
  {
    id: 'newsfeed',
    component: <NewsFeed />,
  },
];

const Home = ({ activeWidgets, activeWallpaperObj: { url } }) => {
  const wallpaperUrl = url || defaultWallpaper;

  return (
    <div className="page">
      <img className="app__bg" src={wallpaperUrl} alt="background" />
      {widgets.map((widget, i) => activeWidgets.includes(widget.id) && <div key={i}>{widget.component}</div>)}
    </div>
  );
};

Home.propTypes = {
  activeWidgets: PropTypes.array.isRequired,
  activeWallpaperObj: PropTypes.object,
};

export default Home;
