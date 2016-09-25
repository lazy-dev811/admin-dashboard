import React, { PropTypes } from 'react';

require('./Settings.scss');

const Settings = ({ options }) => (
  <div className="pg-settings">
    <ul className="pg-settings__options">
      {options.map((option, index) => {
        return (
          <li className="pg-settings__options__option cf">
           {/* ng-className="{ 'is-active' : option.value }" */}
            <label className="label pg-settings__options__option__label"
             htmlFor={`${option}-${index}`}>
              {option.label}
            </label>
            <div className="input-container input-container--switch">
              <input className="checkbox"
              //  ng-model="option.value"
              //  ng-change="options.update(option.id)"
               type="checkbox"
               id={`${option}-${index}`} />
              <label htmlFor="option-{{ $index }}" />
            </div>
          </li>
        )
      })}
    </ul>
  </div>
);

Settings.propTypes = {};

export default Settings;
