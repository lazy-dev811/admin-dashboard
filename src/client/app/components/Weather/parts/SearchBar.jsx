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
        {/* <input
          className="input"
          placeholder="Get a 5 day forecast"
          value={this.state.searchTerm}
          onChange={(event => this.onInputChange(event.target.value))}
        /> */}
        {/* <button type="submit" className="btn">
          Search for city
        </button> */}
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


//
//
//
// import React, { PropTypes } from 'react';
// import { Field, reduxForm } from 'redux-form';
//
// import FormField from '../../FormElements/FormField/FormField.jsx';
// import Button from '../../Button/Button.jsx';
//
// const validate = (values) => {
//   const errors = {};
//   if (!values.title) {
//     errors.title = 'enter a title yo';
//   }
//   if (!values.categories) {
//     errors.categories = 'enter a categories yo';
//   }
//   if (!values.content) {
//     errors.content = 'enter a content yo';
//   }
//   return errors;
// };
//
// const Form = ({ classCustom, handleSubmit }) => (
//   <form onSubmit={handleSubmit} className={classCustom}>
//     This here is a Form
//     <div>
//       <Field
//         type="text"
//         name="title"
//         component={FormField}
//         id="title"
//         placeholder="title"
//       />
//     </div>
//     <div>
//       <Field
//         type="text"
//         name="categories"
//         component={FormField}
//         id="categories"
//         placeholder="categories"
//       />
//     </div>
//     <div>
//       <Field
//         type="text"
//         name="content"
//         component={FormField}
//         id="content"
//         placeholder="content"
//       />
//     </div>
//     <Button handleSubmit={handleSubmit} label="Add post" />
//   </form>
// );
//
// Form.propTypes = {
//   classCustom: PropTypes.string,
//   handleSubmit: PropTypes.func,
// };
//
// export default {
//   form: reduxForm({
//     form: 'BlogForm',
//     validate,
//   })(Form),
// };
