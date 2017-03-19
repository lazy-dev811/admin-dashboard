import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';
import FormFieldRadio from '../../FormElements/FormFieldRadio/FormFieldRadio.jsx';
import FormFieldText from '../../FormElements/FormFieldText/FormFieldText.jsx';

const Form = ({ settings, handleChange, handleSubmit }) => (
  <form onSubmit={() => handleSubmit}>
    <ul className="pg-settings__options">
      {settings.map((setting, index) => {
        const uniqueId = `${setting}-${index}`;

        return (
          <li
            className="pg-settings__options__option cf"
            key={uniqueId}
          >
            <Field
              name={setting.name}
              component={FormFieldCheckbox}
              id={uniqueId}
              label={setting.label}
              onChange={handleChange}
            />
          </li>
        );
      })}

      <Field
        name="testRadio"
        component={FormFieldRadio}
        id="testRadio"
        label="testRadio"
        onChange={handleChange}
      />

      <Field
        name="testCheckbox"
        component={FormFieldCheckbox}
        id="testCheckbox2"
        label="testCheckboxo"
        onChange={handleChange}
      />

      <Field
        name="testText"
        component={FormFieldText}
        onChange={handleChange}
        placeholder={'please work'}
      />
    </ul>
  </form>
);

Form.propTypes = {
  settings: PropTypes.array,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default {
  form: reduxForm({
    form: 'SettingsForm',
  })(Form),
};
