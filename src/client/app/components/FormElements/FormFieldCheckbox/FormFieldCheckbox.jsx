import React, { PropTypes } from 'react';

import './FormFieldCheckbox.scss';

const FormFieldCheckbox = ({
  input,
  label,
  id,
}) => (
  <div className="checkbox-field-container">
    {
      label &&
      <label
        className="label"
        htmlFor={id}
      >
        {label}
      </label>
    }

    <div className="checkbox-input-container">
      <input
        {...input}
        className="checkbox-input"
        type="checkbox"
        id={id}
        checked={input.value}
      />
      <label className="checkbox-input-label" htmlFor={id} />
    </div>
  </div>
);

FormFieldCheckbox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default FormFieldCheckbox;
