import React, { useState } from "react";
import "./PostsList.scss";
import { useSelector } from "react-redux";
import { PostItem } from "../PostItem/PostItem";

export const PostsList = () => {
  const posts = useSelector((state) => state); /* useState([])    */
  return (
    <div className="post__list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
