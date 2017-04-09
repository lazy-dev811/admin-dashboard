import React, { PropTypes } from 'react';

import ChevronDown from '../../Icon/ChevronDown';
import './FormFieldSelect.scss';

const FormFieldSelect = ({
  label,
  id,
  title,
  options,
  className,
}) => (
  <div className={`select-field-container ${className}`}>
    {
      label &&
      <label
        className="label"
        htmlFor={id}
      >
        {label}
      </label>
    }

    <div className="select-input" id={id}>
      <div className="select-input__title">
        {title}
        <ChevronDown />
      </div>
      <div className="select-input__options-wrap">
        <ul className="select-input__options">
          {options.map(option => <li className="select-input__options__option">{option}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

FormFieldSelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default FormFieldSelect;
