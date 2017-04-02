import React, { PropTypes } from 'react';
import classnames from 'classnames';

import Loader from '../../Loader/Loader.jsx';
import ErrorMessage from '../../ErrorMessage/ErrorMessage.jsx';
import Tick from '../../Icon/Tick.jsx';
import Heart from '../../Icon/Heart.jsx';
import HeartFill from '../../Icon/HeartFill.jsx';

import './WallpaperPickerItem.scss';

const WallpaperPickerItem = ({
  wallpaperObj = {},
  selectedWallpaperId = undefined,
  isSaved = false,
  index = undefined,
  setWallpaper = () => {},
  asyncStatus = {},
}) => {
  const isActive = wallpaperObj.id && wallpaperObj.id === selectedWallpaperId;
  const itemClass = classnames('wallpaper-picker-item', { 'is-active': isActive });

  return (
    <li
      className={itemClass}
      key={index}
    >

      {asyncStatus.inProgress && <Loader />}
      {asyncStatus.error && <ErrorMessage position="absolute" />}

      {isActive && <Tick />}
      {!isSaved && <Heart /> }
      {isSaved && <HeartFill />}

      {
        wallpaperObj.thumbUrl &&
        <button onClick={() => setWallpaper(wallpaperObj.id)}>
          <img
            className="wallpaper-picker-item__img"
            src={wallpaperObj.thumbUrl} alt="yeah yeah"
          />
        </button>
      }
    </li>
  );
};

WallpaperPickerItem.propTypes = {
  wallpaperObj: PropTypes.object,
  selectedWallpaperId: PropTypes.number,
  isSaved: PropTypes.bool,
  index: PropTypes.number,
  setWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPickerItem;
