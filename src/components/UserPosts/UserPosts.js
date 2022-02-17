import { useState, useEffect } from "react";

export const UserPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
      );
      const todoList = await result.json();
      setPosts(todoList);
    };
    setData();
  }, [user.id]);

  let number = 1;

  return (
    <div>
      {posts.map((post) => (
        <div className="user__data__row" key={post.id}>
          <span className="user__number">{number++}</span>
          <div className="user__info">{post.title}</div>
        </div>
      ))}
    </div>
  );
};
