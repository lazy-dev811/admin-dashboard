import React, { PropTypes } from 'react';


import AppSidebar from '../AppSidebar/AppSidebar.jsx';
import ColorPicker from '../ColorPicker/redux/container.js';
import Settings from '../Settings/redux/container.js';
import ToastMessages from '../ToastMessages/redux/container.js';
// import SliderDetailContainer from '../../containers/SliderDetailContainer.js';

require('./AppLayout.scss');

const AppLayout = ({ children }) => (
  <div>
    <img className="app__bg" src="public/nature-1.jpg" alt="dsds" />
    <AppSidebar />
    <ColorPicker />
    <Settings />
    <ToastMessages />
    {/* <SliderDetailContainer /> */}

    <div className="app-content">
      {children}
    </div>
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.any,
};

export default AppLayout;
