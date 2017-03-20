import moment from 'moment';

import { WIDGET_GREET, DATE_FORMAT } from '../../../constants';

const INITIAL_STATE = {
  widgetName: WIDGET_GREET,
  person: {
    name: 'Vincent',
    surname: 'Bollaert',
  },
  weather: 'a fierce mild',
  date: moment().format(DATE_FORMAT),
};

export default (state = INITIAL_STATE) => state;
