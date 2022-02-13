export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      return [...state].filter((todo) => todo.id !== action.payload);
    }
    case "UPDATE_TODO": {
      let newTodos = [...state];
      const count = newTodos.findIndex(
        (newTodo) => newTodo.id === action.payload.id
      );
      newTodos[count] = action.payload;
      return newTodos;
    }
    case "TOGGLE_COMPLETE": {
      action.payload.completed = !action.payload.completed;

      return [...state];
    }
    default:
  }

  return state;
};
