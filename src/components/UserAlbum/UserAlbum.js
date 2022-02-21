import { useRequest } from "../../hooks/useRequest";

export const UserAlbums = ({ user }) => {
  const { data, loading } = useRequest(
    `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
  );
  return (
    <div>
      {loading ? (
        <div className="user__info">Loading...</div>
      ) : (
        data.map((album, idx) => (
          <div key={album.id} className="user__data__row">
            <span className="user__number">{idx + 1}</span>
            <div className="user__info">{album.title}</div>
          </div>
        ))
      )}
    </div>
  );
};
