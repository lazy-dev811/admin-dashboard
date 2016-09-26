import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BookDetail = ({ activeBook }) => {
  if (!activeBook) return <div>Select a book</div>;

  return (
    <div>
      <b>Active book:</b> {activeBook.title}
    </div>
  );
};

BookDetail.propTypes = {
  activeBook: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
