import "./PostItem.scss";

export const PostItem = ({ post }) => {
  return (
    <div className="post">
      <div className="post__title">{post.title}</div>
      <p className="post__text">{post.text}</p>
      <div className="post__more">More...</div>
    </div>
  );
};
