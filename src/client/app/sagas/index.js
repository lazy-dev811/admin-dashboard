import { blogSagas } from '../components/Blog/redux/sagas';

import weatherSagas from '../components/Weather/redux/sagas';

const rootSagas = [
  blogSagas,
  weatherSagas,
];

export default rootSagas;
