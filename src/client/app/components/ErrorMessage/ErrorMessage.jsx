import React, { PropTypes } from 'react';
import Error from '../Icon/Error.jsx';

import './ErrorMessage.scss';

const ErrorMessage = ({ message = 'An error occured' }) => (
  <div className="error-message">
    <Error className="error-message__icon" />
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
