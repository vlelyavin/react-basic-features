import { PostItemList } from "../../components/PostItemList";
import { PostInput } from "../../components/PostInput";
import { useEffect, useState } from "react";
import { PostsList } from "../PostsList";

export const Post = () => {
  const [postItems, setPostItems] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const responsePosts = await result.json();
      setPostItems(responsePosts);
    };
    setData();
  }, []);

  return (
    <div>
      <PostInput />
      <PostsList />
      <PostItemList key={postItems.id} postItems={postItems} />
    </div>
  );
};
