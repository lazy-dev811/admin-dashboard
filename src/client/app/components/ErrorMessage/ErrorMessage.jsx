import React, { PropTypes } from 'react';
import Error from '../Icon/Error.jsx';

import './ErrorMessage.scss';

const ErrorMessage = ({ className = '', message = 'An error occured', position }) => {
  const style = { position };

  return (
    <div className={`error-message ${className}`} style={style}>
      <Error className="error-message__icon" />
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  position: PropTypes.string,
};

export default ErrorMessage;
