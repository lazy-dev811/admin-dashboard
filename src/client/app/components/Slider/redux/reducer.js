import { SLIDE_ITEM_SELECT } from './actions';

const INITIAL_STATE = {
  activeWidgets: [],
};

export default (state = INITIAL_STATE, dispatch) => {
  switch (dispatch.type) {
    case SLIDE_ITEM_SELECT: {
      const { widgetName } = dispatch;
      let activeWidgets = state.activeWidgets.slice();

      if (state.activeWidgets.includes(widgetName)) {
        activeWidgets = [
          ...state.activeWidgets.slice(0, state.activeWidgets.findIndex(i => i === widgetName)),
          ...state.activeWidgets.slice(state.activeWidgets.findIndex(i => i === widgetName) + 1),
        ];
      } else {
        activeWidgets = [...state.activeWidgets, widgetName];
      }

      return {
        ...state,
        activeWidgets,
      };
    }

    default: {
      return state;
    }
  }
};
