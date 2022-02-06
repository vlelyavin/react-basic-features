import "./PostList.scss";

export const PostList = ({ posts }) => {
  return (
    <div className="post__list">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post__title">{post.title}</div>
          <p className="post__text">{post.body}</p>
          <div className="post__more">More...</div>
        </div>
      ))}
    </div>
  );
};
