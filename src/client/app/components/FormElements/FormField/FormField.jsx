import React, { PropTypes } from 'react';
import classnames from 'classnames';

import './FormField.scss';

const FormField = ({
  input,
  label,
  placeholder,
  id,
  type = 'text',
  meta: { touched, error },
}) => {
  const isError = touched && error;
  const fieldClass = classnames('text-input', { 'is-error': isError });

  return (
    <div className="text-field-container">
      {
        label &&
        <label
          className="label"
          htmlFor={id}
        >
          {label}
        </label>
      }

      <input
        {...input}
        className={fieldClass}
        type={type}
        placeholder={placeholder}
        id={id}
      />
      {
        isError &&
        <div className="field-error">{error}</div>
      }
    </div>
  );
};

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
};

export default FormField;
