import { useState, useEffect } from "react";
import "./UserTodos.scss";
import classNames from "classnames";

export const UserTodos = ({ user }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/todos`
      );
      const todoList = await result.json();
      setTodos(todoList);
      console.log(todoList);
    };
    setData();
  }, [user.id]);

  let number = 1;

  return (
    <div>
      {todos.map((todo) => (
        <div className="user__data__row">
          <div className="user__todo__number">{number++}</div>
          <div
            className={classNames("user__todo__info", {
              done: todo.completed,
            })}
          >
            {todo.title}
          </div>
          <div
            className={classNames("user__checkmark", {
              checked: todo.completed,
            })}
          ></div>
        </div>
      ))}
    </div>
  );
};
