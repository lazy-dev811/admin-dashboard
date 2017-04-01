import { connect } from 'react-redux';
import {
  selectWallpaper,
  getWallpapersRequested,
} from './actions';

import WallpaperPicker from '../WallpaperPicker.jsx';

const mapStateToProps = ({ widgetWallpaperPicker, config }) => ({ ...widgetWallpaperPicker, ...config });

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

export default connect(mapStateToProps, null, mergeProps)(WallpaperPicker);
