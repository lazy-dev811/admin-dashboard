import React, { PropTypes } from 'react';

import reduxForm from './parts/SearchBar.jsx';
import List from './parts/List.jsx';

const Weather = ({ weatherList, onSubmit }) => (
  <div>
    <reduxForm.form onSubmit={onSubmit} />
    <List weatherList={weatherList} />
  </div>
);

Weather.propTypes = {
  weatherList: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Weather;
