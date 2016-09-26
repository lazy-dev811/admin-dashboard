import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {

  renderList() {
    return this.props.books.map(book => (
      <li
        className="list-group-item"
        key={book.title}
        onClick={() => this.props.selectBook(book)}
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  selectBook: PropTypes.func,
};

function mapStateToProps(state) {
  console.log(state, 'SDSDSDS');
  return {
    books: state.books,
  };
}

// make sure what's returned from the action is assigned to props
function mapDispathToProps(dispatch) {
  // make sure the action flows throuhg all reducers
  return bindActionCreators({
    selectBook,
  },
  dispatch);
}

// turns BookList into container connected to the redux state, and make
// the selectBook dispatch a prop
export default connect(mapStateToProps, mapDispathToProps)(BookList);
