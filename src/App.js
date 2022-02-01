import React from "react";
import { connect } from "react-redux";
import "./style/style.scss";

function App(props) {
  const onIncrement = (event) => {
    props.dispatch({
      type: "INCREMENT",
    });
  };

  const onDecrement = (event) => {
    props.dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div className="counter">
      <h1>{props.count}</h1>
      <div className="buttons">
        <button className="button" onClick={onIncrement}>
          Increment
        </button>
        <button className="button" onClick={onDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export default connect(mapStateToProps)(App);
