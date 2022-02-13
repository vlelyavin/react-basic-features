import "./PostItemList.scss";

export const PostItemList = ({ postItems }) => {
  return (
    <div className="post__list">
      {postItems.map((postItem) => (
        <div className="post" key={postItem.id}>
          <div className="post__title">{postItem.title}</div>
          <p className="post__text">{postItem.body}</p>
          <div className="post__more">More...</div>
        </div>
      ))}
    </div>
  );
};
