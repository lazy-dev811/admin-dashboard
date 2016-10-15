import React, { PropTypes } from 'react';
import SearchBar from './parts/SearchBar.jsx';

const Weather = ({ onSubmit }) => (
  <div>
    KEY: 8b8fdbe46cc1b907383d8f937198939e
    <button onClick={() => onSubmit()}>click me</button>
    <SearchBar />
  </div>
);

Weather.propTypes = {};

export default Weather;
