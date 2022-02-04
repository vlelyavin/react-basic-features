import React, { useState } from "react";
import { addTodo } from "../actions/todoActions";
import { useDispatch } from "react-redux";

const TodoInput = () => {
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
      <div className="input__row">
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
    </div>
  );
};

export { TodoInput };
