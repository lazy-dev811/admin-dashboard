import React, { PropTypes } from 'react';

import Wallpaper from '../Icon/Wallpaper.jsx';
import WallpaperPickerItem from './parts/WallpaperPickerItem.jsx';

require('./WallpaperPicker.scss');

class WallpaperPicker extends React.Component {
  componentDidMount() {
    this.props.getWallpapers();
  }

  render() {
    return (
      <div className="wallpaper-picker">
        <div className="wallpaper-picker__toggle is-noob">
          <Wallpaper />
        </div>

        <ul className="wallpaper-picker__items">
          {/* {item(this.props.loadedWallpaper, 1, true)} */}
          {this.props.wallpapers.map(wallpaperObj => (
            <WallpaperPickerItem
              wallpaperObj={wallpaperObj}
              selectedWallpaperId={this.props.selectedWallpaperId}
              setWallpaper={this.props.setWallpaper}
              asyncStatus={this.props.asyncStatus}
            />
          ))}
        </ul>
      </div>
    );
  }
}

WallpaperPicker.propTypes = {
  loadedWallpaper: PropTypes.object,
  selectedWallpaperId: PropTypes.number,
  wallpapers: PropTypes.array,
  getWallpapers: PropTypes.func,
  setWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPicker;
