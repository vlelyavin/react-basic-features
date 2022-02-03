import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo__form">
      {props.edit ? (
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo__input edit"
          />
          <button onClick={handleSubmit} className="todo__button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            value={input}
            onChange={handleChange}
            name="text"
            className="todo__input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo__button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
