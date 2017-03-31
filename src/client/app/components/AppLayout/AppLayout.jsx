import React, { PropTypes } from 'react';

import ColorPicker from '../ColorPicker';
import Sidebar from '../Sidebar';
// import Settings from '../Settings';
import Slider from '../Slider';
import ToastMessages from '../ToastMessages';

require('./AppLayout.scss');
require('../../assets/images/nature-1.jpg');

const AppLayout = ({ children }) => (
  <div className="app-content">
    <img className="app__bg" src="src/client/app/assets/images/nature-1.jpg" alt="background" />
    {children}
    <Sidebar />
    {/* <Settings /> */}
    <Slider />
    <ToastMessages />
    <ColorPicker />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
