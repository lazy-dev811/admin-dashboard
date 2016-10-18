import React, { PropTypes } from 'react';

const Detail = ({ activePost, classCustom }) => (
  <div className={classCustom}>
    this here is the detail {activePost.title}
  </div>
);

Detail.propTypes = {
  activePost: PropTypes.object,
  classCustom: PropTypes.string,
};

export default Detail;
