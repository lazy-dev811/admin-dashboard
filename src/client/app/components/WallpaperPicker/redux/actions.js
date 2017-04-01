export const SELECT_WALLPAPER = 'SELECT_WALLPAPER';

export const GET_WALLPAPERS_REQUESTED = 'GET_WALLPAPERS_REQUESTED';
export const GET_WALLPAPERS_SUCCEEDED = 'GET_WALLPAPERS_SUCCEEDED';
export const GET_WALLPAPERS_FAILED = 'GET_WALLPAPERS_FAILED';

export const selectWallpaper = selectedWallpaper => ({
  type: SELECT_WALLPAPER,
  selectedWallpaper,
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
