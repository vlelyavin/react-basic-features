import React from "react";
import { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem";
import { useSelector } from "react-redux";
import { JsonTodoItem } from "../JsonTodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => state);

  const [jsonTodos, setJsonTodos] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonTodosData = await result.json();
      setJsonTodos(jsonTodosData);
      console.log(jsonTodosData);
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
        {jsonTodos.map((jsonTodo) => (
          <JsonTodoItem key={jsonTodo.id} jsonTodo={jsonTodo} />
        ))}
      </div>
    </div>
  );
};
