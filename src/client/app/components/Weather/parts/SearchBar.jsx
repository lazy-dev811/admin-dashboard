import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormField from '../../FormElements/FormField/FormField.jsx';
import Button from '../../Button/Button.jsx';

const validate = (values) => {
  const errors = {};
  if (!values.search) {
    errors.search = 'search for something yo';
  }
  return errors;
};

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'capetown',
    };
  }

  onInputChange(searchTerm) {
    this.setState({
      searchTerm,
    });
  }

  render() {
    return (
      <form className="input-group" onSubmit={() => this.props.handleSubmit(this.state.searchTerm)}>
        <Field
          type="text"
          name="search"
          component={FormField}
          id="search"
          placeholder="search"
        />
        <Button handleSubmit={this.props.handleSubmit} label="Search for city" />
      </form>
    );
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default {
  form: reduxForm({
    form: 'WeatherSearchBar',
    validate,
  })(SearchBar),
};
