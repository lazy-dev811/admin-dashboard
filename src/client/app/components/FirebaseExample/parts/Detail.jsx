import React, { PropTypes } from 'react';

const Detail = ({ firebaseActivePost: { title, categories, content }, classCustom }) => (
  <div className={classCustom}>
    DETAIL:
    <p>
      Title: {title}
    </p>
    <p>
      Categories: {categories}
    </p>
    <p>
      Content: {content}
    </p>
  </div>
);

Detail.propTypes = {
  firebaseActivePost: PropTypes.object,
  classCustom: PropTypes.string,
};

export default Detail;
