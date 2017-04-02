import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { isEqual } from 'lodash';

import Loader from '../../Loader/Loader.jsx';
import ErrorMessage from '../../ErrorMessage/ErrorMessage.jsx';
import Tick from '../../Icon/Tick.jsx';
import Heart from '../../Icon/Heart.jsx';
import HeartFill from '../../Icon/HeartFill.jsx';

import './WallpaperPickerItem.scss';

const WallpaperPickerItem = ({
  wallpaperObj = {},
  activeWallpaperObj = undefined,
  isSaved = false,
  setWallpaper = () => {},
  asyncStatus = {},
}) => {
  const isActive = isEqual(wallpaperObj, activeWallpaperObj);
  const itemClass = classnames('wallpaper-picker-item', { 'is-active': isActive });
  return (
    <li className={itemClass} key={wallpaperObj.id}>
      {asyncStatus.inProgress && <Loader />}
      {asyncStatus.error && <ErrorMessage position="absolute" />}

      {isActive && <Tick />}
      {!isSaved && <Heart /> }
      {isSaved && <HeartFill />}

      {
        wallpaperObj.thumbUrl &&
        <button onClick={() => setWallpaper(wallpaperObj)}>
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
  activeWallpaperObj: PropTypes.object,
  isSaved: PropTypes.bool,
  setWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPickerItem;
