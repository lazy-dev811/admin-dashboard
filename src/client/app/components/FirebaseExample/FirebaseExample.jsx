import React, { Component, PropTypes } from 'react';

import List from './parts/List.jsx';
import reduxForm from './parts/Form.jsx';
import Detail from './parts/Detail.jsx';

require('./Blog.scss');

class FirebaseExample extends Component {
  componentWillMount() {
    this.props.onFetchPosts();
  }

  render() {
    const { firebaseBlogPosts, firebaseActivePost, onFetchPost, onRemovePost, onSubmit, onChange } = this.props;

    return (
      <div className="blog">
        <List firebaseBlogPosts={firebaseBlogPosts} onFetchPost={onFetchPost} onRemovePost={onRemovePost} />
        <reduxForm.form onSubmit={onSubmit} onChange={onChange} classCustom="blog__form" />
        {
          firebaseActivePost &&
            <Detail firebaseActivePost={firebaseActivePost} classCustom="blog__detail" />
        }
      </div>
    );
  }
}

FirebaseExample.propTypes = {
  firebaseBlogPosts: PropTypes.array.isRequired,
  firebaseActivePost: PropTypes.object,
  onFetchPosts: PropTypes.func.isRequired,
  onFetchPost: PropTypes.func.isRequired,
  onRemovePost: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default FirebaseExample;
