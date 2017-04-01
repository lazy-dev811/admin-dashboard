import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

import Wallpaper from '../Icon/Wallpaper.jsx';

require('./WallpaperPicker.scss');

class WallpaperPicker extends React.Component {
  componentDidMount() {
    this.props.getWallpapers();
  }

  render() {
    const item = (wallpaper = {}, index, active) => {
      const itemClass = classnames('pg-color-picker__list__item', { active });

      return (
        <li
          className={itemClass}
          key={index}
          onClick={() => this.props.setWallpaper(wallpaper)}
        >

          {this.props.asyncStatus.inProgress && <Loader />}
          {this.props.asyncStatus.error && <ErrorMessage position="absolute" />}

          {
            wallpaper.thumbUrl &&
            <img className="pg-color-picker__list__item__img" src={wallpaper.thumbUrl} alt="yeah yeah" />
          }
        </li>
      );
    };

    return (
      <div className="pg-color-picker">
        <div className="pg-color-picker__toggle is-noob">
          <Wallpaper />
        </div>

        <ul className="pg-color-picker__list">
          {/* {item(this.props.selectedWallpaper, 1, true)} */}
          {this.props.wallpapers.map((wallpaper, index) => item(wallpaper, index, false))}
        </ul>
      </div>
    );
  }
}

WallpaperPicker.propTypes = {
  selectedWallpaper: PropTypes.object,
  wallpapers: PropTypes.array,
  getWallpapers: PropTypes.func,
  setWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPicker;
