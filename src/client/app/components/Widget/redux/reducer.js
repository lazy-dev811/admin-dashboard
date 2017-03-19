import {
  UPDATE_WIDGET_CONFIG,
} from './actions';

const INITIAL_STATE = {
  widgetBlog: {
    name: 'blog',
    type: 'widget',
    components: {
      body: true,
      header: true,
    },
    dimensions: {
      width: 300,
      height: 300,
    },
    position: {
      bottom: 100,
      left: 40,
    },
    // transparentBg: true,
    transparentScrollbar: true,
    displaySettings: true,
  },
  widgetGreet: {
    name: 'greet',
    type: 'widget',
    components: {
      body: false,
      header: false,
    },
    dimensions: {},
    position: {
      right: 60,
      bottom: 60,
    },
    displaySettings: true,
  },
  widgetBookmarks: {
    name: 'bookmarks',
    type: 'widget',
    components: {
      // body: true,
      // header: true,
    },
    dimensions: {
      width: 700,
      // height: 400,
    },
    position: {
      top: 100,
      left: 100,
    },
    // transparentBg: true,
    transparentScrollbar: true,
  },
  widgetQuote: {
    name: 'quote',
    type: 'widget',
    position: {
      bottom: 60,
      left: 60,
    },
    components: {},
    dimensions: {},
  },
  widgetWeather: {
    name: 'weather',
    type: 'widget',
    components: {
      body: true,
    },
    position: {
      top: 400,
      left: 40,
    },
    dimensions: {},
    transparent: true,
  },
  widgetColorPicker: {
    name: 'color picker',
    type: 'widget',
    position: {
      right: 0,
      top: '50%',
    },
    components: {},
    dimensions: {},
  },
  widgetToastMessages: {
    name: 'toast messages',
    type: 'component',
    position: {
      right: 20,
      top: 20,
    },
    components: {},
    dimensions: {},
  },
  widgetSettings: {
    name: 'settings',
    type: 'component',
    components: {
      body: true,
    },
    position: {
      top: 20,
      left: 40,
    },
    dimensions: {},
  },
  widgetSidebar: {
    name: 'sidebar',
    type: 'component',
    components: {
      // body: true,
    },
    position: {
      top: 0,
      bottom: 0,
      left: 0,
    },
    dimensions: {
      // width: 200,
    },
  },
  widgetSlider: {
    name: 'slider',
    type: 'component',
    components: {
      // body: true,
    },
    position: {
      right: 0,
      bottom: 0,
      left: 0,
    },
    dimensions: {
      // height: 90,
    },
  },
  widgetSliderDetail: {
    name: 'slider detail',
    type: 'widget',
    components: {
      body: true,
    },
    dimensions: {
      width: 470,
      height: 600,
    },
    position: {
      top: 20,
      left: 40,
    },
    // transparentBg: true,
    transparentScrollbar: true,
    displaySettings: false,
  },
  widgetYoutubePlayer: {
    name: 'youtube player',
    type: 'widget',
    components: {
      body: true,
    },
    dimensions: {
      width: 500,
      height: 650,
    },
    position: {
      top: 20,
      left: 40,
    },
    transparentScrollbar: true,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WIDGET_CONFIG: {
      // console.log('REDUCER', action)
      const { widgetName, widgetConfig: { key, value, category } } = action;
      let configToUpdate;

      if (category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [category]: {
              ...state[widgetName][category],
              [key]: value,
            },
          },
        };
      }

      if (!category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [!category && key]: [!category] && value,
          },
        };
      }

      return {
        ...state,
        ...configToUpdate,
      };
    }

    default: {
      return state;
    }
  }
};
