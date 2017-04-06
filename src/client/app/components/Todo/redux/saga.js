import uuidV1 from 'uuid/v1';
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
  const id = uuidV1();
  const todoKey = `todos/${id}`;

  try {
    yield call(create, 'todos', () => ({
      [todoKey]: { ...formValues, id },
    }));
    yield put(addTodoSucceeded(formValues, id));
  } catch (error) {
    yield put(addTodoFailed(error));
  }
}

function* removeTodo(action) {
  const id = action.id;

  try {
    yield call(remove, 'todos', id);
    yield put(removeTodoSucceeded(id));
  } catch (error) {
    yield put(removeTodoFailed(error));
  }
}

function* todoSagas() {
  yield* [
    takeEvery(FETCH_TODOS_REQUESTED, fetchTodos),
    takeEvery(ADD_TODO_REQUESTED, addTodo),
    takeEvery(REMOVE_TODO_REQUESTED, removeTodo),
  ];
}

export default todoSagas;
