import { connect } from 'react-redux';
import {
  fetchTodosRequested,
  addTodoRequested,
  removeTodoRequested,
} from './actions';

import Todo from '../Todo.jsx';
import widgetHOC from '../../Widget/Widget.jsx';

const mapStateToProps = ({ widgetTodo, config }) => ({ ...widgetTodo, ...config });

const mergeProps = ({ widgetIdentifier, todos, activeTodo, widgetTodo, asyncStatus }, { dispatch }) => ({
  widgetIdentifier,
  todos,
  activeTodo,
  config: widgetTodo,
  asyncStatus,
  onFetchTodos(todosToFetch) {
    dispatch(fetchTodosRequested(todosToFetch));
  },
  onRemoveTodo(id) {
    dispatch(removeTodoRequested(id));
  },
  onSubmit(formValues) {
    dispatch(addTodoRequested(formValues, todos.length));
  },
  onChange() {},
});

export default connect(mapStateToProps, null, mergeProps)(widgetHOC(Todo));
