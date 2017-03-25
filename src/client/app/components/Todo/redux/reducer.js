import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCEEDED,
  FETCH_TODOS_FAILED,

  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCEEDED,
  ADD_TODO_FAILED,

  REMOVE_TODO_REQUESTED,
  REMOVE_TODO_SUCCEEDED,
  REMOVE_TODO_FAILED,
} from './actions';

const INITIAL_STATE = {
  widgetIdentifier: 'widgetTodo',
  widgetName: 'Todo',
  todos: [],
  asyncStatus: {
    inProgress: false,
    error: false,
    errorMessage: undefined,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case FETCH_TODOS_SUCCEEDED: {
      return {
        ...state,
        todos: action.todos || [],
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case FETCH_TODOS_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case ADD_TODO_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
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
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case ADD_TODO_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }


    case REMOVE_TODO_REQUESTED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: true,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case REMOVE_TODO_SUCCEEDED: {
      const todoIndex = action.todoIndex;
      const todos = state.todos.filter((todo, index) => index !== todoIndex);

      return {
        ...state,
        todos,
        asyncStatus: {
          inProgress: false,
          error: false,
          errorMessage: undefined,
        },
      };
    }

    case REMOVE_TODO_FAILED: {
      return {
        ...state,
        asyncStatus: {
          inProgress: false,
          error: true,
          errorMessage: action.error.message,
        },
      };
    }

    default: {
      return state;
    }
  }
};
