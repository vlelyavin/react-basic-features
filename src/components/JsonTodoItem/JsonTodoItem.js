import React from "react";
import "./JsonTodoItem.scss";

export const JsonTodoItem = ({ jsonTodo }) => {
  if (jsonTodo.completed === true) {
    return (
      <div>
        <div className="todo__row completed">{jsonTodo.title}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="todo__row">{jsonTodo.title}</div>
    </div>
  );
};
