import React, { PropTypes } from 'react';

import SearchBar from './parts/SearchBar.jsx';
import List from './parts/List.jsx';

const Weather = ({ weather, onSubmit }) => (
  <div>
    <SearchBar onSubmit={onSubmit} />
    <List weather={weather} />
  </div>
);

Weather.propTypes = {
  weather: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Weather;
