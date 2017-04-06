export const FETCH_TODOS_REQUESTED = 'FETCH_TODOS_REQUESTED';
export const FETCH_TODOS_SUCCEEDED = 'FETCH_TODOS_SUCCEEDED';
export const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

export const ADD_TODO_REQUESTED = 'ADD_TODO_REQUESTED';
export const ADD_TODO_SUCCEEDED = 'ADD_TODO_SUCCEEDED';
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED';

export const REMOVE_TODO_REQUESTED = 'REMOVE_TODO_REQUESTED';
export const REMOVE_TODO_SUCCEEDED = 'REMOVE_TODO_SUCCEEDED';
export const REMOVE_TODO_FAILED = 'REMOVE_TODO_FAILED';

export const fetchTodosRequested = () => ({
  type: FETCH_TODOS_REQUESTED,
});

export const fetchTodosSucceeded = todos => ({
  type: FETCH_TODOS_SUCCEEDED,
  todos,
});

export const fetchTodosFailed = todos => ({
  type: FETCH_TODOS_FAILED,
  todos,
});


export const addTodoRequested = (formValues, formLength) => ({
  type: ADD_TODO_REQUESTED,
  formValues,
  formLength,
});

export const addTodoSucceeded = (formValues, id) => ({
  type: ADD_TODO_SUCCEEDED,
  formValues,
  id,
});

export const addTodoFailed = error => ({
  type: ADD_TODO_FAILED,
  error,
});


export const removeTodoRequested = id => ({
  type: REMOVE_TODO_REQUESTED,
  id,
});

export const removeTodoSucceeded = id => ({
  type: REMOVE_TODO_SUCCEEDED,
  id,
});

export const removeTodoFailed = error => ({
  type: REMOVE_TODO_FAILED,
  error,
});
