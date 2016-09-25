import React, { PropTypes } from 'react';

import AppSidebar from '../AppSidebar/AppSidebar.jsx';
import AppHeader from '../AppHeader/AppHeader.jsx';
import SliderContainer from '../../containers/SliderContainer.js';
import ColorPickerContainer from '../../containers/ColorPickerContainer.js';
import SettingsContainer from '../../containers/SettingsContainer.js';
import ToastMessagesContainer from '../../containers/ToastMessagesContainer.js';

require('./AppLayout.scss');

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppSidebar />
      <AppHeader />
      <SliderContainer />
      <ColorPickerContainer />
      <SettingsContainer />
      <ToastMessagesContainer />

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
