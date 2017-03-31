import React, { PropTypes } from 'react';

import './FormFieldRadio.scss';

const FormGroupRadio = ({ children, label, id }) => (
  <div className="radio-group-container">
    {
      label &&
      <label
        className="label"
        htmlFor={id}
      >
        {label}
      </label>
    }
    {children}
  </div>
);

FormGroupRadio.propTypes = {
  children: PropTypes.array,
  label: PropTypes.string,
  id: PropTypes.string,
};

const FormFieldRadio = ({ input, id }) => (
  <div className="radio-input-container">
    <input
      {...input}
      className="radio-input"
      type="radio"
      id={id}
      checked={input.value}
    />
    <label className="radio-input-label" htmlFor={id} />
  </div>
);

FormFieldRadio.propTypes = {
  input: PropTypes.object,
  id: PropTypes.string,
};

export default FormFieldRadio;
export { FormGroupRadio };
