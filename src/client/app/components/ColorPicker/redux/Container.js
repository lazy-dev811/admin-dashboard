import { connect } from 'react-redux';
import {
  selectWallpaper,
  getWallpapersRequested,
} from './actions';

import ColorPicker from '../ColorPicker.jsx';

const mapStateToProps = ({ widgetColorPicker, config }) => ({ ...widgetColorPicker, ...config });

const mergeProps = ({ widgetIdentifier, colors, selectedWallpaper, wallpapers, asyncStatus }, { dispatch }) => ({
  colors,
  selectedWallpaper,
  wallpapers,
  asyncStatus,
  getWallpapers() {
    dispatch(getWallpapersRequested());
  },
  setWallpaper(wallpaper) {
    dispatch(selectWallpaper(wallpaper));
  },
});

export default connect(mapStateToProps, null, mergeProps)(ColorPicker);
