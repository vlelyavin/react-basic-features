import React from "react";
import { Post } from "../../components/Post";
import { postReducer } from "../../reducers/postReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const Postpage = () => {
  const store = createStore(postReducer, composeWithDevTools());

  return (
    <div className="main__container">
      <h1 className="main__title">Posts</h1>
      <Provider store={store}>
        <Post />
      </Provider>
    </div>
  );
};
