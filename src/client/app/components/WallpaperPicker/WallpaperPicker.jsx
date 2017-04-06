import React, { PropTypes } from 'react';

import Wallpaper from '../Icon/Wallpaper.jsx';
import Pin from '../Icon/Pin.jsx';
import Pinned from '../Icon/Pinned.jsx';

import WallpaperPickerItem from './parts/WallpaperPickerItem.jsx';

require('./WallpaperPicker.scss');

class WallpaperPicker extends React.Component {
  componentDidMount() {
    this.props.getActiveWallpaper();
    this.props.getWallpapers();
    this.props.getPinnedWallpapers();
  }

  render() {
    const determineVisibleItems = wallpapers => (
      wallpapers.map((wallpaperObj, index) => (
        <WallpaperPickerItem
          wallpaperObj={wallpaperObj}
          activeWallpaperObj={this.props.activeWallpaperObj}
          pinToggledWallpaper={this.props.pinToggledWallpaper}
          isPinned={this.props.pinnedWallpapers.find(wallpaper => wallpaper.id === wallpaperObj.id) !== undefined}
          key={index}
          pinWallpaper={this.props.pinWallpaper}
          setWallpaper={this.props.setWallpaper}
          asyncStatus={this.props.asyncStatus}
        />
      ))
    );

    return (
      <div className="wallpaper-picker">
        <button className="wallpaper-picker__toggle" onClick={this.props.togglePinnedWallpapers}>
          <Wallpaper />
          {!this.props.showPinnedWallpapers && <Pin />}
          {this.props.showPinnedWallpapers && <Pinned />}
        </button>

        <ul className="wallpaper-picker__items">
          {this.props.showPinnedWallpapers && determineVisibleItems(this.props.pinnedWallpapers)}
          {!this.props.showPinnedWallpapers && determineVisibleItems(this.props.wallpapers)}
        </ul>
      </div>
    );
  }
}

WallpaperPicker.propTypes = {
  activeWallpaperObj: PropTypes.object,
  wallpapers: PropTypes.array,
  pinToggledWallpaper: PropTypes.object,
  pinnedWallpapers: PropTypes.array,
  showPinnedWallpapers: PropTypes.bool,
  getActiveWallpaper: PropTypes.func,
  getWallpapers: PropTypes.func,
  getPinnedWallpapers: PropTypes.func,
  togglePinnedWallpapers: PropTypes.func,
  pinWallpaper: PropTypes.func,
  setWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPicker;
