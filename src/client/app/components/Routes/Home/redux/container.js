import { connect } from 'react-redux';

import Home from '../Home.jsx';


const mapStateToProps = ({ widgetSlider, widgetWallpaperPicker, config }) => ({
  ...widgetSlider,
  ...widgetWallpaperPicker,
  ...config,
  config,
});

export default connect(mapStateToProps, undefined, undefined)(Home);
