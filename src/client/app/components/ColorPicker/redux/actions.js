export const COLOR_PICKER_SELECT_COLOR = 'COLOR_PICKER_SELECT_COLOR';

export const GET_WALLPAPERS_REQUESTED = 'GET_WALLPAPERS_REQUESTED';
export const GET_WALLPAPERS_SUCCEEDED = 'GET_WALLPAPERS_SUCCEEDED';
export const GET_WALLPAPERS_FAILED = 'GET_WALLPAPERS_FAILED';

export const GET_WALLPAPER_REQUESTED = 'GET_WALLPAPER_REQUESTED';
export const GET_WALLPAPER_SUCCEEDED = 'GET_WALLPAPER_SUCCEEDED';
export const GET_WALLPAPER_FAILED = 'GET_WALLPAPER_FAILED';

export const colorPickerSelectColor = selectedColorName => ({
  type: COLOR_PICKER_SELECT_COLOR,
  selectedColorName,
});

export const getWallpapersRequested = wallpapers => ({
  type: GET_WALLPAPERS_REQUESTED,
  wallpapers,
});

export const getWallpapersSucceeded = data => ({
  type: GET_WALLPAPERS_SUCCEEDED,
  data,
});

export const getWallpapersFailed = error => ({
  type: GET_WALLPAPERS_FAILED,
  error,
});

export const getWallpaperRequested = wallpaper => ({
  type: GET_WALLPAPER_REQUESTED,
  wallpaper,
});

export const getWallpaperSucceeded = data => ({
  type: GET_WALLPAPER_SUCCEEDED,
  data,
});

export const getWallpaperFailed = error => ({
  type: GET_WALLPAPER_FAILED,
  error,
});
