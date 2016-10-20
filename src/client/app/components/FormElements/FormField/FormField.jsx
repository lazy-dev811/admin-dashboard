import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('./FormField.scss');

const FormField = ({ input, type, label, id, meta: { touched, error } }) => {
  const isError = touched && error;
  const fieldClass = classnames('field', { 'is-error': isError });

  return (
    <div className="field-container">
      <label htmlFor={id}>{label}</label>
      <input
        {...input}
        className={fieldClass}
        type={type}
        placeholder={label}
        id={id}
      />
      {
        isError &&
          <div className="error">{error}</div>
      }
    </div>
  );
};

FormField.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
};

export default FormField;
