import React, { PropTypes } from 'react';

require('./Greet.scss');

const Greet = ({ person }) => (
  <div className="greet">
    <h1 className="greet__title">
      Hi {person.name}
    </h1>
    <div>
      Today is a fierce mild
    </div>
    <div>
      Date here
    </div>
  </div>
);

Greet.propTypes = {
  person: PropTypes.object,
};

export default Greet;
