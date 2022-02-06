import { PostList } from "../../components/PostList";
import { useState, useEffect } from "react";

export const Postpage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonPosts = await result.json();
      setPosts(jsonPosts);
    };
    setData();
  }, []);

  return (
    <div className="main__container">
      <h1 className="main__title">Posts</h1>
      <PostList key={posts.id} posts={posts} />
    </div>
  );
};
