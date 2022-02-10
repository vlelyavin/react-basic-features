import React from "react";
import { addTodo } from "../../actions/todoActions";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "./TodoInput.scss";

export const TodoInput = () => {
  const dispatch = useDispatch();

  const todoAddButton = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        name: formik.values.title,
        completed: false,
      })
    );
    formik.values.title = "";
  };
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .max(30, "Must be 30 characters or less")
        .required("Must not be empty"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        type="text"
        className="todo__input"
        name="title"
        value={formik.values.title}
      />

      <button
        onBlur={formik.handleBlur}
        onClick={todoAddButton}
        className="todo__button"
        type="submit"
        disabled={formik.values.title.trim() === ""}
      >
        Add todo
      </button>
      <br></br>
      {formik.touched && formik.errors.title && (
        <span>{formik.errors.title}</span>
      )}
    </form>
  );
};
