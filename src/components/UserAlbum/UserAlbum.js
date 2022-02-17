import { useState, useEffect } from "react";

export const UserAlbums = ({ user }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
      );
      const albumsList = await result.json();
      setAlbums(albumsList);
    };
    setData();
  }, [user.id]);

  let number = 1;

  return (
    <div>
      {albums.map((album) => (
        <div className="user__data__row">
          <span className="user__number">{number++}</span>
          <div className="user__info">{album.title}</div>
        </div>
      ))}
    </div>
  );
};
