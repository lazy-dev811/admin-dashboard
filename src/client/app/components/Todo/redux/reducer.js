import {
  FETCH_TODOS_SUCCEEDED,
  ADD_TODO_SUCCEEDED,
  REMOVE_TODO_SUCCEEDED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetTodo',
  widgetName: 'Todo',
  todos: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCEEDED: {
      return {
        ...state,
        todos: action.todos || [],
      };
    }

    case ADD_TODO_SUCCEEDED: {
      const newTodo = Object.assign(action.formValues);

      return {
        ...state,
        todos: [
          ...state.todos,
          newTodo,
        ],
      };
    }

    case REMOVE_TODO_SUCCEEDED: {
      const todoIndex = action.todoIndex;
      const todos = state.todos.filter((todo, index) => index !== todoIndex);

      return {
        ...state,
        todos,
      };
    }

    default: {
      return state;
    }
  }
};
