import React, { PropTypes } from 'react';

const List = ({ blogPosts, onFetchPost, onRemovePost }) => (
  <ul className="blog-posts">
    {
      blogPosts && blogPosts.map(post => (
        <li className="blog-posts__post" key={post.id}>
          <span className="blog-posts__post__title">{post.title}</span>
          <span className="blog-posts__post__category">{post.categories}</span>
          {/* <button className="btn blog-posts__post__btn" onClick={() => onRemovePost(post.id)}>Remove post</button>
          <button className="btn blog-posts__post__btn" onClick={() => onFetchPost(post.id)}>Load detail</button> */}
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  blogPosts: PropTypes.array,
  onFetchPost: PropTypes.func,
  onRemovePost: PropTypes.func,
};

export default List;
