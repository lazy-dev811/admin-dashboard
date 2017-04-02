import React, { PropTypes } from 'react';

import WallpaperPicker from '../WallpaperPicker';
import Sidebar from '../Sidebar';
// import Settings from '../Settings';
import Slider from '../Slider';
import ToastMessages from '../ToastMessages';

require('./AppLayout.scss');

const AppLayout = ({ children }) => (
  <div className="app-content">
    {children}
    <Sidebar />
    {/* <Settings /> */}
    <Slider />
    <ToastMessages />
    <WallpaperPicker />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
