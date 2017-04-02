export const GET_ACTIVE_WALLPAPER_REQUESTED = 'GET_ACTIVE_WALLPAPER_REQUESTED';
export const GET_ACTIVE_WALLPAPER_SUCCEEDED = 'GET_ACTIVE_WALLPAPER_SUCCEEDED';
export const GET_ACTIVE_WALLPAPER_FAILED = 'GET_ACTIVE_WALLPAPER_FAILED';

export const GET_WALLPAPERS_REQUESTED = 'GET_WALLPAPERS_REQUESTED';
export const GET_WALLPAPERS_SUCCEEDED = 'GET_WALLPAPERS_SUCCEEDED';
export const GET_WALLPAPERS_FAILED = 'GET_WALLPAPERS_FAILED';

export const SET_WALLPAPER = 'SET_WALLPAPER';

export const SAVE_WALLPAPER_REQUESTED = 'SAVE_WALLPAPER_REQUESTED';
export const SAVE_WALLPAPER_SUCCEEDED = 'SAVE_WALLPAPER_SUCCEEDED';
export const SAVE_WALLPAPER_FAILED = 'SAVE_WALLPAPER_FAILED';


export const getActiveWallpaperRequested = () => ({
  type: GET_ACTIVE_WALLPAPER_REQUESTED,
});

export const getActiveWallpaperSucceeded = data => ({
  type: GET_ACTIVE_WALLPAPER_SUCCEEDED,
  data,
});

export const getActiveWallpaperFailed = error => ({
  type: GET_ACTIVE_WALLPAPER_FAILED,
  error,
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


export const setWallpaper = wallpaperObj => ({
  type: SET_WALLPAPER,
  wallpaperObj,
});


export const saveWallpaperRequested = wallpaperObj => ({
  type: SAVE_WALLPAPER_REQUESTED,
  wallpaperObj,
});

export const saveWallpaperSucceeded = data => ({
  type: SAVE_WALLPAPER_SUCCEEDED,
  data,
});

export const saveWallpaperFailed = error => ({
  type: SAVE_WALLPAPER_FAILED,
  error,
});
