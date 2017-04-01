import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

import Wallpaper from '../Icon/Wallpaper.jsx';
import Tick from '../Icon/Tick.jsx';
import Heart from '../Icon/Heart.jsx';
import HeartFill from '../Icon/HeartFill.jsx';

require('./WallpaperPicker.scss');

class WallpaperPicker extends React.Component {
  componentDidMount() {
    this.props.getWallpapers();
  }

  render() {
    const item = (wallpaper = {}, index) => {
      const active = wallpaper.id && wallpaper.id === this.props.selectedWallpaperId;
      const itemClass = classnames('pg-color-picker__list__item', { active });

      return (
        <li
          className={itemClass}
          key={index}
          onClick={() => this.props.setWallpaper(wallpaper.id)}
        >

          {this.props.asyncStatus.inProgress && <Loader />}
          {this.props.asyncStatus.error && <ErrorMessage position="absolute" />}
          {
            active &&
            <div className="item__icons">
              <Tick />
              <Heart />
              <HeartFill />
            </div>
          }

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
          {/* {item(this.props.loadedWallpaper, 1, true)} */}
          {this.props.wallpapers.map((wallpaper, index) => item(wallpaper, index))}
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
