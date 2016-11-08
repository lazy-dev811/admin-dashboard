import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormFieldText from '../../FormElements/FormFieldText/FormFieldText.jsx';
import Button from '../../Button/Button.jsx';

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: 'reactjs',
//     };
//   }
//
//   handleChange(searchQuery) {
//     this.setState({
//       searchQuery,
//     });
//     this.props.onSearchQueryChange(searchQuery);
//   }
//
//   render() {
//     return (
//       <div className="col-md-12 youtube-player__search-bar">
//         <input
//           className="input"
//           type="text"
//           value={this.state.searchQuery}
//           onChange={event => this.handleChange(event.target.value)}
//         />
//       </div>
//     );
//   }
// }
//
// SearchBar.propTypes = {
//   onSearchQueryChange: PropTypes.func,
// };
//
// export default SearchBar;




// const validate = (values) => {
//   const errors = {};
//   if (!values.search) {
//     errors.search = 'search for something yo';
//   }
//   return errors;
// };

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
