import React, { PropTypes } from 'react';

const List = ({ firebaseBlogPosts }) => (
  <ul className="blog-posts">
    {
      firebaseBlogPosts && firebaseBlogPosts.map(post => (
        <li className="blog-posts__post" key={post.id}>
          <span className="blog-posts__post__title">{post.title}</span>
          <span className="blog-posts__post__category">{post.categories}</span>
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  firebaseBlogPosts: PropTypes.array,
};

export default List;
