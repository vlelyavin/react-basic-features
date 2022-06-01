import React from "react";
import { Todo } from "../../components/Todo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { todoReducer } from "../../reducers/todoReducer";

const todoStore = createStore(todoReducer);

export const Todopage = () => {
  return (
    <div className="main__container">
      <h1 className="main__title">Todos</h1>
      <Provider store={todoStore}>
        <Todo />
      </Provider>
    </div>
  );
};
