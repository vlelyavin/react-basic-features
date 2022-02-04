import React from "react";
import { Todo } from "../../components/Todo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../../reducers/todoReducer";
import "./Todopage";

let store = createStore(reducer);

export const Todopage = () => {
  return (
    <div className="main__container">
      <h1 className="main__title">Todo</h1>
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
};
