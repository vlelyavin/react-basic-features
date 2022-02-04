import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../actions/todoActions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();
  return (
    <div>
      <div className="todo__row">
        {editable ? (
          <input
            type="text"
            className="todo__input edit"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        ) : (
          <p className="todo__data">{todo.name}</p>
        )}
        <div className="todo__buttons">
          <button
            className="todo__button"
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              );
              if (editable) {
                setName(todo.name);
              }
              setEditable(!editable);
            }}
          >
            {editable ? "Update" : "Edit"}
          </button>
          <button
            className="todo__button"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
