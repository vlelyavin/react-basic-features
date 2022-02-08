import React from "react";
import { addTodo } from "../../actions/todoActions";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "./TodoInput.scss";

export const TodoInput = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: yup.object({
      title: yup
        .string()
        .max(30, "Must be 30 characters or")
        .min(1, "Must not be empty")
        .required("Must not be empty"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const todoAddButton = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        name: formik.values.title,
      })
    );
    formik.values.title = " ";
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.title}
        onChange={formik.handleChange}
        type="text"
        className="todo__input"
        name="title"
        onBlur={formik.handleBlur}
      />

      <button onClick={todoAddButton} className="todo__button" type="submit">
        Add todo
      </button>
      <br></br>
      {formik.touched.title && formik.errors.title ? (
        <span>{formik.errors.title}</span>
      ) : null}
    </form>
  );
};
