import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ChevronDown from '../../Icon/ChevronDown';
import './FormFieldSelect.scss';

const FormFieldSelect = ({
  label = '',
  id = '',
  title = '',
  options = [],
  compareOptions = [],
  className = '',
  onChange = () => {},
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
          {options.map((option) => {
            const optionClass = classnames('select-input__options__option', {
              'is-active': compareOptions.findIndex(compareOption => (compareOption === option)) > -1,
            });

            return (
              <li className={optionClass}>
                <button className="select-input__options__option__btn" onClick={() => onChange(option)}>
                  {option}
                </button>
              </li>
            );
          })}
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
  compareOptions: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormFieldSelect;
