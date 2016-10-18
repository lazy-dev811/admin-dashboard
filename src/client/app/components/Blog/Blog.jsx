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
    const { data: { blogPosts, activePost }, onAddPost, onRemovePost } = this.props;

    return (
      <div className="blog">
        <List blogPosts={blogPosts} onRemovePost={onRemovePost} />
        <reduxForm.test2 onAddPost={onAddPost} classCustom="blog__form" />
        {
          activePost &&
            <Detail activePost={activePost} classCustom="blog__detail" />
        }
      </div>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
  onFetchPosts: PropTypes.func.isRequired,
  onAddPost: PropTypes.func.isRequired,
  onRemovePost: PropTypes.func.isRequired,
};

export default Blog;
