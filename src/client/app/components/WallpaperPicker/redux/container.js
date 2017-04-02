import { connect } from 'react-redux';
import {
  getActiveWallpaperRequested,
  getWallpapersRequested,
  setWallpaper,
  saveWallpaperRequested,
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
  getActiveWallpaper() {
    dispatch(getActiveWallpaperRequested());
  },
  getWallpapers() {
    dispatch(getWallpapersRequested());
  },
  setWallpaper(wallpaperObj) {
    dispatch(setWallpaper(wallpaperObj));
    dispatch(saveWallpaperRequested(wallpaperObj));
  },
});

export default connect(mapStateToProps, null, mergeProps)(Component);
