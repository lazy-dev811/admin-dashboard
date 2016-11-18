import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('../FormField.scss');
require('./FormFieldCheckbox.scss');

const FormFieldCheckbox = ({
  input,
  label,
  id,
  meta: { touched, error },
  onChange,
}) => {
  const isError = touched && error;
  const fieldClass = classnames('checkbox', { 'is-error': isError });
  const labelClass = classnames('label', { 'is-active': input.value });
  console.log(input)

  return (
    <div className="checkbox-container">
      <label
        className={labelClass}
        htmlFor={id}
      >
        {label}
      </label>

      <div className="input-container">
        <input
          {...input}
          className={fieldClass}
          type="checkbox"
          id={id}
          onChange={(e) => {
            console.log('change?')
            onChange(e.target.value);
            input.onChange(e.target.value);
          }}
        />
        <label htmlFor={id} />
        {
          isError &&
            <div className="field__error">{error}</div>
        }
      </div>
    </div>
  );
};

FormFieldCheckbox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
  onChange: PropTypes.func,
};

export default FormFieldCheckbox;
