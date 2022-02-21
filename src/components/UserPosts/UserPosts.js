import { useRequest } from "../../hooks/useRequest";

export const UserPosts = ({ user }) => {
  const { data, loading } = useRequest(
    `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
  );

  return (
    <div>
      {loading ? (
        <div className="user__info">Loading...</div>
      ) : (
        data.map((post, idx) => (
          <div key={post.id} className="user__data__row">
            <span className="user__number">{idx + 1}</span>
            <div className="user__info">{post.title}</div>
          </div>
        ))
      )}
    </div>
  );
};
