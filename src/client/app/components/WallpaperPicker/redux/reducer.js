import {
  GET_ACTIVE_WALLPAPER_REQUESTED,
  GET_ACTIVE_WALLPAPER_SUCCEEDED,
  GET_ACTIVE_WALLPAPER_FAILED,

  GET_WALLPAPERS_REQUESTED,
  GET_WALLPAPERS_SUCCEEDED,
  GET_WALLPAPERS_FAILED,

  GET_PINNED_WALLPAPERS_REQUESTED,
  GET_PINNED_WALLPAPERS_SUCCEEDED,
  GET_PINNED_WALLPAPERS_FAILED,

  TOGGLE_PINNED_WALLPAPERS,

  PIN_WALLPAPER_REQUESTED,
  PIN_WALLPAPER_SUCCEEDED,
  PIN_WALLPAPER_FAILED,

  SET_WALLPAPER,

  SAVE_WALLPAPER_REQUESTED,
  SAVE_WALLPAPER_SUCCEEDED,
  SAVE_WALLPAPER_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetWallpaperPicker',
  widgetName: 'Wallpaper picker',
  activeWallpaperObj: {},
  wallpapers: Array(20).fill({}),
  pinnedWallpapers: [],
  showPinnedWallpapers: false,
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACTIVE_WALLPAPER_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_ACTIVE_WALLPAPER_SUCCEEDED: {
      return {
        ...state,
        activeWallpaperObj: action.data,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_ACTIVE_WALLPAPER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: 'Couldn\'t load image',
        },
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


    case GET_PINNED_WALLPAPERS_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_PINNED_WALLPAPERS_SUCCEEDED: {
      return {
        ...state,
        pinnedWallpapers: [
          ...action.data,
        ],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case GET_PINNED_WALLPAPERS_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: 'Couldn\'t load pinned wallpapers',
        },
      };
    }


    case TOGGLE_PINNED_WALLPAPERS: {
      return {
        ...state,
        showPinnedWallpapers: !state.showPinnedWallpapers,
      };
    }


    case PIN_WALLPAPER_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case PIN_WALLPAPER_SUCCEEDED: {
      return {
        ...state,
        pinnedWallpapers: [
          ...state.pinnedWallpapers,
          action.data,
        ],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case PIN_WALLPAPER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: 'TEST ERROR',
        },
      };
    }


    case SET_WALLPAPER: {
      return {
        ...state,
        activeWallpaperObj: action.wallpaperObj,
      };
    }

    case SAVE_WALLPAPER_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case SAVE_WALLPAPER_SUCCEEDED: {
      return {
        ...state,
        activeWallpaperObj: action.data,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case SAVE_WALLPAPER_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: 'TEST ERROR',
        },
      };
    }

    default: {
      return state;
    }
  }
};
