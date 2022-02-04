import React from "react";
import { TodoItem } from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state);

  let todoItem = todos.map((todo) => {
    return <TodoItem key={todos.id} todo={todo} />;
  });

  return <div className="todo__item">{todoItem}</div>;
};

export { TodoList };
