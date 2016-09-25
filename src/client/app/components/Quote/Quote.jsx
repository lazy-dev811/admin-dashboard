import React, { PropTypes } from 'react';

require('./Quote.scss');

const Quote = ({ quote }) => (
  <div className="quote">
    {quote}
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string,
};

export default Quote;
