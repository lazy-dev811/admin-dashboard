import React, { PropTypes } from 'react';
import classnames from 'classnames';

require('../FormField.scss');
require('./FormFieldRadio.scss');

const FormField = ({ input, label, id, onChangeTest, meta: { touched, error } }) => {
  const isError = touched && error;
  const fieldClass = classnames('radio', { 'is-error': isError });

  return (
    <div className="radio-container">
      {
        label &&
          <label
            className="label"
            htmlFor={id}
          >
            {label}
          </label>
      }

      <div className="input-container">
        <input
          {...input}
          className={fieldClass}
          type="radio"
          id={id}
          onChange={(event) => {
            input.onChange(event);
            onChangeTest(event.target.value);
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

FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
};

export default FormField;
