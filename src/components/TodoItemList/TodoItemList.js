import React from "react";
import "./TodoItemList.scss";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../../actions/todoActions";

export const TodoItemList = ({ todoItem }) => {
  let itemClassName = "todo__row";
  if (todoItem.completed === true) itemClassName += " completed";

  const dispatch = useDispatch();
  const onToggleComplete = () => dispatch(toggleComplete(todoItem));
  return (
    <div>
      <div className={itemClassName} onClick={onToggleComplete}>
        {todoItem.title}
      </div>
    </div>
  );
};
