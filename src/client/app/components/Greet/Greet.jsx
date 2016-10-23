import React, { PropTypes } from 'react';

require('./Greet.scss');

const Greet = ({ person, date, weather }) => (
  <div className="greet">
    <h1 className="greet__title">
      Hi {person.name}
    </h1>
    <div>
      Today's weather is {weather}
    </div>
    <div>
      {date}
    </div>
  </div>
);

Greet.propTypes = {
  person: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default Greet;
