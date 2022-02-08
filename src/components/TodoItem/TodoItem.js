import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions/todoActions";

import "./TodoItem.scss";

export const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const change = (e) => {
    setName(e.target.value);
  };

  const onUpdate = () => {
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
  };

  const onRemove = () => dispatch(deleteTodo(todo.id));

  return (
    <div className="todo__row">
      {editable ? (
        <input
          type="text"
          className="todo__input edit"
          value={name}
          onChange={change}
        />
      ) : (
        <p className="todo__data">{todo.name}</p>
      )}
      <div className="todo__buttons">
        <button className="todo__button" onClick={onUpdate}>
          {editable ? "Update" : "Edit"}
        </button>
        <button className="todo__button" type="submit" onClick={onRemove}>
          Delete
        </button>
      </div>
    </div>
  );
};
