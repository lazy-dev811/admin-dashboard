import React, { PropTypes } from 'react';

require('./Greet.scss');

const Greet = ({ person, date }) => (
  <div className="greet">
    <h1 className="greet__title">
      Hi {person.name}
    </h1>
    <div>
      {date}
    </div>
  </div>
);

Greet.propTypes = {
  person: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
};

export default Greet;
