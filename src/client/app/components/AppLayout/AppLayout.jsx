import React, { PropTypes } from 'react';

// import YoutubePlayer from '../YoutubePlayer/YoutubePlayer.jsx';

import AppSidebar from '../AppSidebar/AppSidebar.jsx';
import AppHeader from '../AppHeader/AppHeader.jsx';
import SliderContainer from '../../containers/SliderContainer.js';
import ColorPickerContainer from '../../containers/ColorPickerContainer.js';
import SettingsContainer from '../../containers/SettingsContainer.js';
import ToastMessagesContainer from '../../containers/ToastMessagesContainer.js';
import SliderDetailContainer from '../../containers/SliderDetailContainer.js';

import SearchBarContainer from '../../containers/Weather/SearchBarContainer';

require('./AppLayout.scss');

const AppLayout = ({ children }) => {
  return (
    <div>
      {/* <YoutubePlayer /> */}

      {/* <AppSidebar />
      <AppHeader />
      <SliderContainer />
      <ColorPickerContainer />
      <SettingsContainer />
      <ToastMessagesContainer />
      <SliderDetailContainer /> */}

      <SearchBarContainer />

      <div className="app-content">
        {children}
      </div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.any,
}

export default AppLayout;
