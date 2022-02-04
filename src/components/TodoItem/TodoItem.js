import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../actions/todoActions";
import "./TodoItem.scss";

export const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  let change = (e) => {
    setName(e.target.value);
  };

  let onUpdate = () => {
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

  let onRemove = () => dispatch(deleteTodo(todo.id));

  let editUpdate = editable ? "Update" : "Edit";

  let changeFunc = editable ? (
    <input
      type="text"
      className="todo__input edit"
      value={name}
      onChange={change}
    />
  ) : (
    <p className="todo__data">{todo.name}</p>
  );

  return (
    <div>
      <div className="todo__row">
        {changeFunc}
        <div className="todo__buttons">
          <button className="todo__button" onClick={onUpdate}>
            {editUpdate}
          </button>
          <button className="todo__button" onClick={onRemove}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};