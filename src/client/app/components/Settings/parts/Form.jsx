import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';
import FormFieldRadio from '../../FormElements/FormFieldRadio/FormFieldRadio.jsx';

const Form = ({ settings, onChangeTest }) => (
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
              onChangeTest={onChangeTest}
            />
          </li>
        );
      })}

      <Field
        name="radio-test"
        component={FormFieldRadio}
        id="radio-test"
        label="radio-test"
        onChangeTest={onChangeTest}
      />

      <Field
        name="radio-test"
        component={FormFieldRadio}
        id="radio-test2"
        onChangeTest={onChangeTest}
      />
    </ul>
  </form>
);

Form.propTypes = {
  settings: PropTypes.array,
  onChangeTest: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default {
  form: reduxForm({
    form: 'SettingsForm',
  })(Form),
};
