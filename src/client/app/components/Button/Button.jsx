import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './Button.scss';

const Button = ({ label, isDisabled, handleSubmit }) => {
  const buttonClass = classnames('btn', { 'is-disabled': isDisabled });

  return (
    <button
      type="submit"
      className={buttonClass}
      onClick={handleSubmit}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default Button;
