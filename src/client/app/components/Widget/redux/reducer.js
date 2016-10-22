import {
  UPDATE_WIDGET_CONFIG,
} from './actions';

const INITIAL_STATE = {
  widgetBlog: {
    components: {
      body: true,
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
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WIDGET_CONFIG: {
      const { widgetName, widgetConfig: { key, value, category } } = action;
      let configToUpdate;

      if (category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [category]: {
              ...state[widgetName][category],
              [key]: !value,
            },
          },
        };
      }

      if (!category) {
        configToUpdate = {
          [widgetName]: {
            ...state[widgetName],
            [!category && key]: [!category] && !value,
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
