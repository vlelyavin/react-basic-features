import React, { useState } from "react";
import { addTodo } from "../../actions/todoActions";
import { useDispatch } from "react-redux";
import "./TodoInput.scss";

export const TodoInput = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();

  let inputValue = (e) => setName(e.target.value);

  let todoAddButton = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        name: name,
      })
    );
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={inputValue}
        type="text"
        className="todo__input"
      />
      <button onClick={todoAddButton} className="todo__button">
        Add todo
      </button>
    </div>
  );
};
