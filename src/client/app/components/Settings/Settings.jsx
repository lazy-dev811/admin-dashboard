import React, { PropTypes } from 'react';

require('./Settings.scss');

const Settings = ({ data: { settings }, onUpdate }) => (
  <div className="pg-settings">
    <ul className="pg-settings__options">
      {settings.map((setting, index) => {
        const uniqueId = `${setting}-${index}`;

        return (
          <li
            className="pg-settings__options__option cf"
            key={index}
          >
            <label
              className="label pg-settings__options__option__label"
              htmlFor={uniqueId}
            >
              {setting.label}
            </label>
            <div className="input-container input-container--switch">
              <input
                className="checkbox"
                type="checkbox"
                id={uniqueId}
                onChange={() => onUpdate(setting)}
              />
              <label htmlFor={uniqueId} />
            </div>
          </li>
        );
      })}
    </ul>
  </div>
);

Settings.propTypes = {
  data: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default Settings;
