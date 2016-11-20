import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('../FormField.scss');
require('./FormFieldRange.scss');

const FormFieldRange = ({
  input,
  label,
  id,
  meta: { touched, error },
  onChange,
}) => {
  const isError = touched && error;
  const fieldClass = classnames('range', { 'is-error': isError });
  const labelClass = classnames('label', { 'is-active': input.value });

  return (
    <div className="range-container">
      <label
        className={labelClass}
        htmlFor={id}
      >
        {label}
      </label>

      <div>
        <input
          {...input}
          className={fieldClass}
          type="range"
          id={id}
          onChange={(e) => {
            console.log('RANGE COMPONENT', e.target.value);
            onChange(e.target.value);
            input.onChange(e.target.value);
          }}
        />
        {
          isError &&
            <div className="field__error">{error}</div>
        }
      </div>
    </div>
  );
};

FormFieldRange.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
  onChange: PropTypes.func,
};

export default FormFieldRange;
