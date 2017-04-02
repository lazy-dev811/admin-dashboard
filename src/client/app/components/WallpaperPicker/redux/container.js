import { connect } from 'react-redux';
import {
  setWallpaper,
  getWallpapersRequested,
} from './actions';

import { Component } from '../';

const mapStateToProps = ({ widgetWallpaperPicker, config }) => ({ ...widgetWallpaperPicker, ...config });

const mergeProps = ({
  widgetIdentifier,
  colors,
  activeWallpaperObj,
  wallpapers,
  loadedWallpaper,
  asyncStatus,
}, { dispatch }) => ({
  colors,
  activeWallpaperObj,
  wallpapers,
  loadedWallpaper,
  asyncStatus,
  getWallpapers() {
    dispatch(getWallpapersRequested());
  },
  setWallpaper(wallpaperObj) {
    dispatch(setWallpaper(wallpaperObj));
  },
});

export default connect(mapStateToProps, null, mergeProps)(Component);
