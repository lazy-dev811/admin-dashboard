import React, { PropTypes } from 'react';

import SearchBar from './parts/SearchBar.jsx';
import List from './parts/List.jsx';

const Weather = ({ data: { weatherList }, onSubmit }) => (
  <div>
    <SearchBar onSubmit={onSubmit} />
    <List weatherList={weatherList} />
  </div>
);

Weather.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default Weather;
