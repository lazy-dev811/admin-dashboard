import { connect } from 'react-redux';
import {
  setWallpaper,
  getWallpapersRequested,
} from './actions';

import { Component } from '../';

const mapStateToProps = ({ widgetWallpaperPicker, config }) => ({ ...widgetWallpaperPicker, ...config });

const mergeProps = ({ widgetIdentifier, colors, selectedWallpaperId, wallpapers, loadedWallpaper, asyncStatus }, { dispatch }) => ({
  colors,
  selectedWallpaperId,
  wallpapers,
  loadedWallpaper,
  asyncStatus,
  getWallpapers() {
    dispatch(getWallpapersRequested());
  },
  setWallpaper(wallpaperId) {
    dispatch(setWallpaper(wallpaperId));
  },
});

export default connect(mapStateToProps, null, mergeProps)(Component);
