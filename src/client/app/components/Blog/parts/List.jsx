import React, { PropTypes } from 'react';

const List = ({ blogPosts, onRemovePost }) => (
  <ul className="blog-posts">
    {
      blogPosts && blogPosts.map(post => (
        <li className="blog-posts__post" key={post.id}>
          <span>{post.title}</span>
          <i>{post.categories}</i>
          <button className="btn" onClick={() => onRemovePost(post.id)}>Remove post</button>
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  blogPosts: PropTypes.array,
  onRemovePost: PropTypes.func,
};

export default List;
