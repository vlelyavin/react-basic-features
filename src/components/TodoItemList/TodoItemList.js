import React from "react";
import "./TodoItemList.scss";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../../actions/todoActions";
import classNames from "classnames";

export const TodoItemList = ({ todoItem }) => {
  const dispatch = useDispatch();
  const onToggleComplete = () => dispatch(toggleComplete(todoItem));
  return (
    <div>
      <div
        className={classNames("todo__row", {
          " completed": todoItem.completed === true,
        })}
        onClick={onToggleComplete}
      >
        {todoItem.title}
      </div>
    </div>
  );
};
