import { connect } from 'react-redux';
import {
  getActiveWallpaperRequested,
  getWallpapersRequested,
  getPinnedWallpapersRequested,
  togglePinnedWallpapers,
  pinWallpaperRequested,
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
  showPinnedWallpapers,
  pinnedWallpapers,
  loadedWallpaper,
  asyncStatus,
}, { dispatch }) => ({
  colors,
  activeWallpaperObj,
  wallpapers,
  showPinnedWallpapers,
  pinnedWallpapers,
  loadedWallpaper,
  asyncStatus,
  getActiveWallpaper() {
    dispatch(getActiveWallpaperRequested());
  },
  getWallpapers() {
    dispatch(getWallpapersRequested());
  },
  getPinnedWallpapers() {
    dispatch(getPinnedWallpapersRequested());
  },
  togglePinnedWallpapers() {
    dispatch(togglePinnedWallpapers());
  },
  pinWallpaper(wallpaperObj) {
    dispatch(pinWallpaperRequested(wallpaperObj, pinnedWallpapers.length));
  },
  setWallpaper(wallpaperObj) {
    dispatch(setWallpaper(wallpaperObj));
    dispatch(saveWallpaperRequested(wallpaperObj));
  },
});

export default connect(mapStateToProps, null, mergeProps)(Component);
