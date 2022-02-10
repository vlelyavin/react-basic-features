import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  toggleComplete,
} from "../../actions/todoActions";
import "./TodoItem.scss";

export const TodoItem = ({ todo }) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
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

  const onDelete = () => dispatch(deleteTodo(todo.id));
  const onToggleComplete = () => dispatch(toggleComplete(todo));

  let itemClassName = "todo__row";
  if (todo.completed === true) itemClassName += " completed";

  return (
    <div className={itemClassName}>
      {editable ? (
        <input
          type="text"
          className="todo__input edit"
          value={name}
          onChange={onChange}
        />
      ) : (
        <p className="todo__data" onClick={onToggleComplete}>
          {todo.name}
        </p>
      )}
      <div className="todo__buttons">
        <button className="todo__button" onClick={onUpdate}>
          {editable ? "Update" : "Edit"}
        </button>
        <button className="todo__button" type="submit" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
