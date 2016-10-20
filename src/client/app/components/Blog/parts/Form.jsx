import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../FormElements/FormField/FormField.jsx';

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

const Form = ({ classCustom, handleSubmit }) => (
  <form onSubmit={handleSubmit} className={classCustom}>
    This here is a Form
    <div>
      <Field
        name="title"
        component={FormField}
        id="title"
        label="title"
        type="text"
      />
    </div>
    <div>
      <Field
        name="categories"
        component={FormField}
        id="categories"
        label="categories"
        type="text"
      />
    </div>
    <div>
      <Field
        name="content"
        component={FormField}
        id="content"
        label="content"
        type="text"
      />
    </div>
    <button type="submit" className="btn" onClick={handleSubmit}>Add post</button>
  </form>
);

Form.propTypes = {
  classCustom: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default {
  form: reduxForm({
    form: 'BlogForm',
    validate,
  })(Form),
};
