import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';

const Form = ({ settings, onUpdate }) => (
  <form>
    <ul className="pg-settings__options">
      {settings.map((setting, index) => {
        const uniqueId = `${setting}-${index}`;

        return (
          <li
            className="pg-settings__options__option cf"
            key={uniqueId}
          >
            <Field
              name={setting.label}
              component={FormFieldCheckbox}
              id={uniqueId}
              label={setting.label}
              onChange={() => onUpdate(setting)}
            />
            {/* <label
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
            </div> */}
          </li>
        );
      })}
    </ul>
  </form>
);

Form.propTypes = {
  settings: PropTypes.array,
  onUpdate: PropTypes.func,
};

export default {
  form: reduxForm({
    form: 'SettingsForm',
  })(Form),
};
