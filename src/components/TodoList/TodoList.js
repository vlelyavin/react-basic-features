import React from "react";
import { TodoItem } from "../TodoItem";
import { useSelector } from "react-redux";
import "./TodoList.scss";

export const TodoList = () => {
  const todos = useSelector((state) => state);

  let todoItem = todos.map((todo) => {
    return <TodoItem key={todos.id} todo={todo} />;
  });

  return <div>{todoItem}</div>;
};
