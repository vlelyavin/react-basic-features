import React from "react";
import { useSelector } from "react-redux";
import { PostItem } from "../PostItem/PostItem";

export const PostsList = () => {
  const posts = useSelector((state) => state);

  return (
    <div className="post__list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};
