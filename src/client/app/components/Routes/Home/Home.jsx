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

const Home = ({ activeWidgets }) => {
  console.log(Blog);

  return (
    <div className="page">
      {activeWidgets.includes('color picker') && <ColorPicker />}
      {activeWidgets.includes('todo list') && <TodoListContainer />}
      {activeWidgets.includes('youtube player') && <YoutubePlayer />}
      {activeWidgets.includes('weather') && <Weather />}
      {activeWidgets.includes('blog') && <Blog />}
      {activeWidgets.includes('bookmarks') && <Bookmarks />}
      {activeWidgets.includes('slider detail') && <SliderDetail />}
      {activeWidgets.includes('greet') && <Greet />}
      {activeWidgets.includes('quote') && <Quote />}
      <Slider />
    </div>
  );
};

Home.propTypes = {
  activeWidgets: PropTypes.array.isRequired,
};

export default Home;
