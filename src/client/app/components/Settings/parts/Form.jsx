import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';
import FormFieldRadio, { FormGroupRadio } from '../../FormElements/FormFieldRadio/FormFieldRadio.jsx';
import FormField from '../../FormElements/FormField/FormField.jsx';
import FormFieldRange from '../../FormElements/FormFieldRange/FormFieldRange.jsx';

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
      <li className="pg-settings__options__option cf">
        <div className="radio-group-container">
          <FormGroupRadio
            testRadio="testRadio"
            label="Radio"
          >
            <Field
              name="testRadio"
              component={FormFieldRadio}
              id="testRadio"
              onChange={handleChange}
            />
            <Field
              name="testRadio"
              component={FormFieldRadio}
              id="testRadio2"
              onChange={handleChange}
            />
          </FormGroupRadio>
        </div>
      </li>

      <li className="pg-settings__options__option cf">
        <Field
          name="testCheckbox"
          component={FormFieldCheckbox}
          id="testCheckbox"
          label="Checkbox"
          onChange={handleChange}
        />
      </li>
      <li className="pg-settings__options__option cf">
        <Field
          name="testText"
          component={FormField}
          id="testText"
          label="Text"
          type="text"
          onChange={handleChange}
          placeholder={'please work'}
        />
      </li>
      <li className="pg-settings__options__option cf">
        <Field
          name="testNumber"
          component={FormField}
          id="testNumber"
          label="Number"
          type="number"
          onChange={handleChange}
        />
      </li>
      <li className="pg-settings__options__option cf">
        <Field
          displayValue
          name="testRange"
          component={FormFieldRange}
          id="testRange"
          label="Range"
          onChange={handleChange}
        />
      </li>
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
