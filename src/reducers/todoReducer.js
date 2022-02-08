export const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "DELETE_TODO": {
      let newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;
    }
    case "UPDATE_TODO": {
      let newTodos = [...state];
      const count = newTodos.findIndex(
        (newTodo) => newTodo.id === action.payload.id
      );
      newTodos[count] = action.payload;
      return newTodos;
    }

    default:
  }

  return state;
};
