import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../FormElements/FormField/FormField.jsx';
import Button from '../../Button/Button.jsx';

const SearchBar = ({ onChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    This here is a Form
    <div>
      <Field
        type="text"
        name="search"
        component={FormField}
        id="search"
        placeholder="search"
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
  })(SearchBar),
};
