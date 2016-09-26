import React, { PropTypes } from 'react';

// import YoutubePlayer from '../YoutubePlayer/YoutubePlayer.jsx';
import BookList from '../../containers/BookList.js';
// import BookDetail from '../../containers/BookDetail.js';

import AppSidebar from '../AppSidebar/AppSidebar.jsx';
import AppHeader from '../AppHeader/AppHeader.jsx';
import SliderContainer from '../../containers/SliderContainer.js';
import ColorPickerContainer from '../../containers/ColorPickerContainer.js';
import SettingsContainer from '../../containers/SettingsContainer.js';
import ToastMessagesContainer from '../../containers/ToastMessagesContainer.js';
import SliderDetailContainer from '../../containers/SliderDetailContainer.js';

require('./AppLayout.scss');

const AppLayout = ({ children }) => {
  return (
    <div>
      {/* <YoutubePlayer /> */}
      <BookList />
      {/* <BookDetail /> */}

      <AppSidebar />
      <AppHeader />
      <SliderContainer />
      <ColorPickerContainer />
      <SettingsContainer />
      <ToastMessagesContainer />
      <SliderDetailContainer />

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
