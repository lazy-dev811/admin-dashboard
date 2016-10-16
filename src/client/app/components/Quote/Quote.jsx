import React, { PropTypes } from 'react';

require('./Quote.scss');

const Quote = ({ data: { quote } }) => (
  <div className="quote">
    {quote}
  </div>
);

Quote.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Quote;
