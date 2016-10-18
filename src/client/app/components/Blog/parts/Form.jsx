import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const Form = ({ onAddPost, classCustom }) => {
  return (
    <form className={classCustom}>
      This here is a Form
      <div>
        <label>Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label>Categories</label>
        <Field name="categories" component="input" type="text" />
      </div>
      <div>
        <label>Content</label>
        <Field name="content" component="input" type="text" />
      </div>
      <button type="submit" className="btn" onClick={() => onAddPost()}>Add post</button>
    </form>
  );
};

Form.propTypes = {
  onAddPost: PropTypes.func,
  classCustom: PropTypes.string,
};

export default {
  test2: reduxForm({
    form: 'BlogForm',
  })(Form),
};
