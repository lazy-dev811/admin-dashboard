import React, { Component, PropTypes } from 'react';

import List from './parts/List.jsx';
import reduxForm from './parts/Form.jsx';
import Detail from './parts/Detail.jsx';

require('./Blog.scss');

class Blog extends Component {
  componentWillMount() {
    this.props.onFetchPosts();
  }

  render() {
    const { blogPosts, activePost, onFetchPost, onRemovePost, onSubmit, onChange } = this.props;

    return (
      <div className="blog">
        <List blogPosts={blogPosts} onFetchPost={onFetchPost} onRemovePost={onRemovePost} />
        <reduxForm.form onSubmit={onSubmit} onChange={onChange} classCustom="blog__form" />
        {
          activePost &&
            <Detail activePost={activePost} classCustom="blog__detail" />
        }
      </div>
    );
  }
}

Blog.propTypes = {
  blogPosts: PropTypes.array.isRequired,
  activePost: PropTypes.object,
  onFetchPosts: PropTypes.func.isRequired,
  onFetchPost: PropTypes.func.isRequired,
  onRemovePost: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Blog;
