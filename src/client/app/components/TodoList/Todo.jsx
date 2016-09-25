import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Todo = ({
  todo,
  selectTodo,
  setTodoDone,
  removeTodo,
  filterDone,
}) => {
  const baseClass = classNames('todos__todo cf', {
    'is-selected': todo.selected,
    'is-done': todo.done,
    'is-hidden': filterDone && todo.done,
  });
  return (
    <li className={baseClass}
      key={todo.order}
      draggable="true"
      onClick={() => selectTodo(todo)}
    >
      <div className="todos__todo__toggle"></div>
      <div className="todos__todo__lel">
        <div className="todos__todo__options">
          <svg className="icon todos__todo__options-list-toggle"><use xlinkHref="app/assets/icons/ellipsis.svg#svg-sync"></use></svg>
          <ul className="todos__todo__options-list">
            <li className="todos__todo__options-list__option" onClick={() => setTodoDone(todo)}>
              <svg className="icon"><use xlinkHref="app/assets/icons/delete.svg#svg-sync"></use></svg>
            </li>
            <li className="todos__todo__options-list__option" onClick={() => removeTodo(todo)}>
              <svg className="icon"><use xlinkHref="app/assets/icons/delete.svg#svg-sync"></use></svg>
            </li>
            <li className="todos__todo__options-list__option">
              <svg className="icon"><use xlinkHref="app/assets/icons/edit.svg#svg-sync"></use></svg>
            </li>
          </ul>
        </div>

        <div className="todos__todo__title">
          {todo.name}
        </div>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object,
  selectTodo: PropTypes.func,
  setTodoDone: PropTypes.func,
  removeTodo: PropTypes.func,
  filterDone: PropTypes.bool,
}

export default Todo;
