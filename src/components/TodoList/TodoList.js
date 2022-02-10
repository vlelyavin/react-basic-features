import React from "react";
import { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem";
import { useSelector } from "react-redux";
import { TodoItemList } from "../TodoItemList";

export const TodoList = () => {
  const todos = useSelector((state) => state);

  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const TodoItemsList = await result.json();
      setTodoItems(TodoItemsList);
    };
    setData();
  }, []);

  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todos.id} todo={todo} />
        ))}
      </div>
      <div>
        {todoItems.map((todoItem) => (
          <TodoItemList key={todoItem.id} todoItem={todoItem} />
        ))}
      </div>
    </div>
  );
};
