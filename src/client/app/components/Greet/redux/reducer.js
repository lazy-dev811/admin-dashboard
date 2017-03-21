import moment from 'moment';

import { DATE_FORMAT } from '../../../constants';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetGreet',
  widgetName: 'Greet',
  person: {
    name: 'Vincent',
    surname: 'Bollaert',
  },
  date: moment().format(DATE_FORMAT),
};

export default (state = INITIAL_STATE) => state;
