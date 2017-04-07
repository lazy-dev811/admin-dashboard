import { connect } from 'react-redux';

import Home from '../Home.jsx';


const mapStateToProps = ({ widgetSlider, widgetWallpaperPicker }) => ({
  ...widgetSlider,
  ...widgetWallpaperPicker,
});

export default connect(mapStateToProps, undefined, undefined)(Home);
