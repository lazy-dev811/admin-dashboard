import React, { Component, PropTypes } from 'react';

import List from './parts/List.jsx';
import reduxForm from './parts/Form.jsx';

import './Todo.scss';

class Todo extends Component {
  componentWillMount() {
    this.props.onFetchTodos();
  }

  render() {
    const { todos, onRemoveTodo, onSubmit, onChange } = this.props;

    return (
      <div className="todo">
        <List todos={todos} onRemoveTodo={onRemoveTodo} />
        <reduxForm.form onSubmit={onSubmit} onChange={onChange} classCustom="todo__form" />
      </div>
    );
  }
}

Todo.defaultProps = {
  todos: [],
};

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  onFetchTodos: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Todo;
