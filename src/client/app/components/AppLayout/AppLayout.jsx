import React, { PropTypes } from 'react';


import AppSidebar from '../AppSidebar/AppSidebar.jsx';
import ColorPicker from '../ColorPicker/redux/container.js';
// import Settings from '../Settings/redux/container.js';
import ToastMessages from '../ToastMessages/redux/container.js';

require('./AppLayout.scss');

const AppLayout = ({ children }) => (
  <div className="app-content">
    <img className="app__bg" src="public/nature-1.jpg" alt="dsds" />
    {children}
    <AppSidebar />
    <ColorPicker />
    {/* <Settings /> */}
    <ToastMessages />
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
