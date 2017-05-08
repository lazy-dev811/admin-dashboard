import React, { PropTypes } from 'react';
import { ThemeProvider } from 'styled-components';
import classnames from 'classnames';
import { isEqual } from 'lodash';

import { light } from '../../../themes';

import Loader from '../../Loader/Loader.jsx';
import ErrorMessage from '../../ErrorMessage/ErrorMessage.jsx';
import Tick from '../../Icon/Tick.jsx';
import Pin from '../../Icon/Pin.jsx';
import Pinned from '../../Icon/Pinned.jsx';

import './WallpaperPickerItem.scss';

const WallpaperPickerItem = ({
  wallpaperObj = {},
  activeWallpaperObj = undefined,
  isPinned = false,
  pinWallpaper = () => {},
  setWallpaper = () => {},
  asyncStatus = {},
  pinToggledWallpaper = {},
}) => {
  const isActive = isEqual(wallpaperObj, activeWallpaperObj);
  const itemClass = classnames('wallpaper-picker-item', { 'is-active': isActive });
  const determinePinComponent = (value) => {
    const Component = value ? <Pinned /> : <Pin />;
    return (
      <button onClick={() => pinWallpaper(wallpaperObj)}>
        {Component}
      </button>
    );
  };

  return (
    <li className={itemClass} key={wallpaperObj.id}>
      {
        asyncStatus.inProgress &&
        <ThemeProvider theme={light}>
          <Loader />
        </ThemeProvider>
      }

      {
        asyncStatus.error &&
        <ErrorMessage position="absolute" />
      }

      {
        asyncStatus.pinWallpaper.inProgress &&
        isEqual(wallpaperObj, pinToggledWallpaper) &&
        <ThemeProvider theme={light}>
          <Loader />
        </ThemeProvider>
      }

      {
        asyncStatus.saveWallpaper.inProgress &&
        isActive &&
        <ThemeProvider theme={light}>
          <Loader />
        </ThemeProvider>
      }

      {
        isActive &&
        !asyncStatus.pinWallpaper.inProgress &&
        !asyncStatus.saveWallpaper.inProgress &&
        <Tick />
      }

      {isPinned && determinePinComponent(true)}
      {!isPinned && determinePinComponent(false)}

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
  pinToggledWallpaper: PropTypes.object,
  isPinned: PropTypes.bool,
  setWallpaper: PropTypes.func,
  pinWallpaper: PropTypes.func,
  asyncStatus: PropTypes.object,
};

export default WallpaperPickerItem;
