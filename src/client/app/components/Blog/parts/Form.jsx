import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../FormElements/FormField/FormField.jsx';
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
  <form onSubmit={handleSubmit} onChange={onChange} className={classCustom}>
    <div className="row">
      <Field
        type="text"
        name="title"
        component={FormField}
        id="title"
        placeholder="title"
      />
    </div>
    <div className="row">
      <Field
        type="text"
        name="categories"
        component={FormField}
        id="categories"
        placeholder="categories"
      />
    </div>
    <div className="row">
      <Field
        type="text"
        name="content"
        component={FormField}
        id="content"
        placeholder="content"
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
