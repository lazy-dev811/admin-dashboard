import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Loader from '../../Loader/Loader.jsx';
import ErrorMessage from '../../ErrorMessage/ErrorMessage.jsx';
import Tick from '../../Icon/Tick.jsx';
import Heart from '../../Icon/Heart.jsx';
import HeartFill from '../../Icon/HeartFill.jsx';

import './WallpaperPickerItem.scss';

const WallpaperPickerItem = ({ wallpaperObj, selectedWallpaperId, setWallpaper, asyncStatus }) => {
  const isActive = wallpaperObj.id && wallpaperObj.id === selectedWallpaperId;
  const itemClass = classnames('wallpaper-picker-item', { 'is-active': isActive });

  return (
    <li
      className={itemClass}
      key={wallpaperObj.id}
      onClick={() => setWallpaper(wallpaperObj.id)}
    >

      {asyncStatus.inProgress && <Loader />}
      {asyncStatus.error && <ErrorMessage position="absolute" />}

      {
        isActive &&
        <div className="wallpaper-picker-item__icons">
          <Tick />
          <Heart />
          <HeartFill />
        </div>
      }

      {
        wallpaperObj.thumbUrl &&
        <img className="wallpaper-picker-item__img" src={wallpaperObj.thumbUrl} alt="yeah yeah" />
      }
    </li>
  );
};

WallpaperPickerItem.propTypes = {
  wallpaperObj: PropTypes.object,
  selectedWallpaperId: PropTypes.number,
  setWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPickerItem;
