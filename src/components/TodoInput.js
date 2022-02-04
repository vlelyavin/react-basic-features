import React, { useState } from "react";
import { addTodo } from "../actions/todoActions";
import { useDispatch } from "react-redux";

function TodoInput() {
  let [name, setName] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <div className="input__row">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="todo__input"
        />
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: Date.now(),
                name: name,
              })
            );
            setName("");
          }}
          className="todo__button"
        >
          Add todo
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
