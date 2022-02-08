import React from "react";
import "./TodoItemList.scss";

export const TodoItemList = ({ jsonTodo }) => {
  let rowClass = "todo__row";
  if (jsonTodo.completed === true) rowClass += " completed";
  return (
    <div>
      <div className={rowClass}>{jsonTodo.title}</div>
    </div>
  );
};
