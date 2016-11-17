import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldText from '../../FormElements/FormFieldText/FormFieldText.jsx';
import Button from '../../Button/Button.jsx';

const SearchBar = ({ onChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    This here is a Form
    <div>
      <Field
        name="search"
        component={FormFieldText}
        id="search"
        placeholder="search"
        type="text"
        onChange={onChange}
      />
    </div>
    <Button handleSubmit={handleSubmit} label="Search" />
  </form>
);

SearchBar.propTypes = {
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default {
  searchBar: reduxForm({
    form: 'SearchBar',
    // validate,
  })(SearchBar),
};
