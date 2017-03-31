import React, { PropTypes } from 'react';
import FormField from '../../FormElements/FormField/FormField.jsx';

import './FormFieldRange.scss';

const FormFieldRange = ({
  displayValue,
  input,
  label,
  id,
  meta,
}) => (
  <div className="range-field-container">
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
      className="range-input"
      type="range"
      id={id}
    />

    {
      displayValue &&
      <FormField type="text" input={input} id={id} meta={meta} />
    }
  </div>
);

FormFieldRange.propTypes = {
  displayValue: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
  meta: PropTypes.object,
};

export default FormFieldRange;
