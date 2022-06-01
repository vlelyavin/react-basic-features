import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postActions";
import { useFormik } from "formik";
import * as yup from "yup";
import "./PostInput.scss";

export const PostInput = ({ postItems }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Must not be empty"),
      text: yup.string().required("We need some info about that post"),
    }),
    onSubmit: (values, { resetForm }) => {
      const postElem = {
        id: Date.now(),
        title: formik.values.title,
        text: formik.values.text,
      };
      dispatch(addPost(postElem));
      postItems.unshift(postElem);
      resetForm();
    },
  });

  return (
    <form className="post__add__form" onSubmit={formik.handleSubmit}>
      <h1 className="post__add">Add Post</h1>
      <input
        onChange={formik.handleChange}
        type="text"
        className="post__input"
        name="title"
        value={formik.values.title}
        placeholder="Title"
      />
      {formik.errors && <span className="post__errors">{formik.errors.title}</span>}
      <textarea
        onChange={formik.handleChange}
        type="text"
        className="post__textarea"
        name="text"
        value={formik.values.text}
        placeholder="Some post maybe?"
      />
      {formik.errors && <span className="post__errors">{formik.errors.text}</span>}
      <button className="post__submit" type="submit">
        Add
      </button>
    </form>
  );
};
