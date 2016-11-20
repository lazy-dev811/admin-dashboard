import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('./FormFieldNumber.scss');

const FormFieldNumber = ({ input, placeholder, id, meta: { touched, error }, onChange }) => {
  const isError = touched && error;
  const fieldClass = classnames('field field--number', { 'is-error': isError });

  return (
    <div className="field-container">
      <input
        {...input}
        className={fieldClass}
        type="number"
        placeholder={placeholder}
        id={id}
        onChange={(e) => {
          onChange(e.target.value);
          input.onChange(e.target.value);
        }}
      />
      {
        isError &&
          <div className="field__error">{error}</div>
      }
    </div>
  );
};

FormFieldNumber.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
  onChange: PropTypes.func,
};

export default FormFieldNumber;
