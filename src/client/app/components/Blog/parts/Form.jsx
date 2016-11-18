import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldText from '../../FormElements/FormFieldText/FormFieldText.jsx';
import FormFieldCheckbox from '../../FormElements/FormFieldCheckbox/FormFieldCheckbox.jsx';
import Button from '../../Button/Button.jsx';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'enter a title yo';
  }
  if (!values.categories) {
    errors.categories = 'enter a categories yo';
  }
  if (!values.content) {
    errors.content = 'enter a content yo';
  }
  return errors;
};

const Form = ({ classCustom, handleSubmit, onChange }) => (
  <form onSubmit={handleSubmit} className={classCustom}>
    This here is a Form
    <div>
      <Field
        name="title"
        component={FormFieldText}
        id="title"
        placeholder="title"
        type="text"
        onChange={onChange}
      />
    </div>
    <div>
      <Field
        name="categories"
        component={FormFieldText}
        id="categories"
        placeholder="categories"
        type="text"
        onChange={onChange}
      />
    </div>
    <div>
      <Field
        name="content"
        component={FormFieldText}
        id="content"
        placeholder="content"
        type="text"
        onChange={onChange}
      />
    </div>
    <Button handleSubmit={handleSubmit} label="Add post" />
  </form>
);

Form.propTypes = {
  classCustom: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default {
  form: reduxForm({
    form: 'BlogForm',
    validate,
  })(Form),
};
