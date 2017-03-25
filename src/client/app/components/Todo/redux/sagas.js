import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { getAll, create, remove } from 'firebase-saga';

import {
  FETCH_TODOS_REQUESTED,
  fetchTodosSucceeded,
  fetchTodosFailed,

  ADD_TODO_REQUESTED,
  addTodoSucceeded,
  addTodoFailed,

  REMOVE_TODO_REQUESTED,
  removeTodoSucceeded,
  removeTodoFailed,
} from './actions';


function* fetchTodos() {
  try {
    const todos = yield call(getAll, 'todos');
    yield put(fetchTodosSucceeded(todos));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

function* addTodo(dispatch) {
  const formValues = dispatch.formValues;
  const todoKey = `todos/${dispatch.formLength}`;

  try {
    yield call(create, 'todos', () => ({
      [todoKey]: { ...formValues },
    }));
    yield put(addTodoSucceeded(formValues));
  } catch (error) {
    yield put(addTodoFailed(error));
  }
}

function* removeTodo(action) {
  const todoIndex = action.todoIndex;

  try {
    yield call(remove, 'todos', todoIndex);
    yield put(removeTodoSucceeded(todoIndex));
  } catch (error) {
    yield put(removeTodoFailed(error));
  }
}

export function* todoSagas() {
  yield* [
    takeEvery(FETCH_TODOS_REQUESTED, fetchTodos),
    takeEvery(ADD_TODO_REQUESTED, addTodo),
    takeEvery(REMOVE_TODO_REQUESTED, removeTodo),
  ];
}

export default todoSagas;
