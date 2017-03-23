import {
  UPDATE_WIDGET_CONFIG,
} from './actions';

const INITIAL_STATE = {
  widgetFirebaseExample: {
    name: 'firebaseExample',
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
      const { widgetIdentifier, widgetConfig: { key, value, category } } = action;
      let configToUpdate;

      if (category) {
        configToUpdate = {
          [widgetIdentifier]: {
            ...state[widgetIdentifier],
            [category]: {
              ...state[widgetIdentifier][category],
              [key]: value,
            },
          },
        };
      }

      if (!category) {
        configToUpdate = {
          [widgetIdentifier]: {
            ...state[widgetIdentifier],
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
