import { WIDGET_GREET } from '../../../constants/widgets.js';

const INITIAL_STATE = {
  widgetName: WIDGET_GREET,
  person: {
    name: 'Vincent',
    surname: 'Bollaert',
  },
  weather: 'a fierce mild',
  date: '16 October 2016',
};

export default (state = INITIAL_STATE) => state;
