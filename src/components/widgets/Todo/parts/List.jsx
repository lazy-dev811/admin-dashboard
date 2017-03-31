import React, { PropTypes } from 'react';

const List = ({ todos, onRemoveTodo }) => (
  <ul className="todos">
    {
      todos && todos.map((todo, index) => (
        <li className="todos__todo" key={index} onClick={() => onRemoveTodo(index)}>
          <span className="todos__todo__title">{todo.title}</span>
          <span className="todos__todo__category">{todo.categories}</span>
        </li>
      ))
    }
  </ul>
);

List.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};

export default List;
