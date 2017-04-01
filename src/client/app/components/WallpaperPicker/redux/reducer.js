import {
  SET_WALLPAPER,

  GET_WALLPAPERS_REQUESTED,
  GET_WALLPAPERS_SUCCEEDED,
  GET_WALLPAPERS_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetWallpaperPicker',
  widgetName: 'Wallpaper picker',
  selectedWallpaper: undefined,
  selectedWallpaperId: undefined,
  wallpapers: Array(20).fill({}),
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WALLPAPER: {
      console.log(state.wallpapers)
      console.log(action.wallpaperId)
      return {
        ...state,
        selectedWallpaperId: action.wallpaperId,
      };
    }

    case GET_WALLPAPERS_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_WALLPAPERS_SUCCEEDED: {
      const mappedWallpapers = action.data.data.response.map(d => ({
        id: d.id,
        url: d.image.url,
        thumbUrl: d.image.thumb.url,
      }));

      return {
        ...state,
        wallpapers: [
          ...mappedWallpapers,
        ],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_WALLPAPERS_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: 'Couldn\'t load image',
        },
      };
    }

    default: {
      return state;
    }
  }
};
